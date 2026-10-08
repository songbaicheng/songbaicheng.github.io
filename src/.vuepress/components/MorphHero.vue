<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useArticles } from '@theme-hope/composables/blog/useArticles';
const stage = ref(null), canvas = ref(null), progress = ref(0), available = ref(false);
let dispose = () => {};
const fallback = ref(false);
const blogArticles = useArticles();
const articles = computed(() => blogArticles.value.items.slice(0, 3).map(({ info, path }) => ({
  title: info.title, topic: Array.isArray(info.category) ? info.category[0] : info.category || '文章', href: path,
})));
onMounted(async () => {
  let destroyed = false;
  dispose = () => { destroyed = true; };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { fallback.value = true; return; }
  try {
    const [THREE, { gsap }, { ScrollTrigger }] = await Promise.all([
      import('three'), import('gsap'), import('gsap/ScrollTrigger'),
    ]);
    if (destroyed) return;
    gsap.registerPlugin(ScrollTrigger);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true, antialias: false, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, .1, 100);
    camera.position.z = 9;
    const count = innerWidth < 768 ? 5500 : 12000;
    const initial = new Float32Array(count * 3), target = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const t = i / count, a = i * 2.39996323, y = 1 - 2 * t, r = Math.sqrt(1 - y * y);
      initial.set([r * Math.cos(a) * 2, y * 2, r * Math.sin(a) * 2], i * 3);
      const u = t * Math.PI * 2, v = a;
      target.set([(1.55 + .6 * Math.cos(v)) * Math.cos(u), (1.55 + .6 * Math.cos(v)) * Math.sin(u), .6 * Math.sin(v)], i * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(initial, 3));
    geometry.setAttribute('initialPosition', new THREE.BufferAttribute(initial, 3));
    geometry.setAttribute('targetPosition', new THREE.BufferAttribute(target, 3));
    const uniforms = { uProgress: { value: 0 }, uTime: { value: 0 }, uPixelRatio: { value: renderer.getPixelRatio() } };
    const material = new THREE.ShaderMaterial({
      uniforms, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute vec3 initialPosition;
        attribute vec3 targetPosition;
        uniform float uProgress;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vLight;
        vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
        vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
        vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
        vec4 invSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
        float snoise(vec3 v){
          const vec2 C=vec2(1.0/6.0,1.0/3.0);
          vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
          vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;
          vec3 i1=min(g.xyz,l.zxy),i2=max(g.xyz,l.zxy);
          vec3 x1=x0-i1+C.xxx,x2=x0-i2+C.yyy,x3=x0-.5;
          i=mod289(i);
          vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
          vec3 ns=vec3(2./7.,.5/7.-1.,1./7.);
          vec4 j=p-49.*floor(p*ns.z*ns.z);
          vec4 x_=floor(j*ns.z),y_=floor(j-7.*x_);
          vec4 x=x_*ns.x+ns.y,y=y_*ns.x+ns.y,h=1.-abs(x)-abs(y);
          vec4 b0=vec4(x.xy,y.xy),b1=vec4(x.zw,y.zw);
          vec4 s0=floor(b0)*2.+1.,s1=floor(b1)*2.+1.,sh=-step(h,vec4(0.));
          vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy,a1=b1.xzyw+s1.xzyw*sh.zzww;
          vec3 p0=vec3(a0.xy,h.x),p1=vec3(a0.zw,h.y),p2=vec3(a1.xy,h.z),p3=vec3(a1.zw,h.w);
          vec4 norm=invSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
          p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
          vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m*=m;
          return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
        }
        void main(){
          float p=clamp(uProgress,0.,1.);
          vec3 pos=mix(initialPosition,targetPosition,p);
          float envelope=sin(p*3.14159265);
          vec3 q=pos*1.1+uTime*.12;
          vec3 noise=vec3(snoise(q),snoise(q+vec3(17.,4.,9.)),snoise(q+vec3(8.,21.,3.)));
          pos+=noise*envelope*1.15;
          float a=.25+uTime*.06+p*.8;
          pos.xz=mat2(cos(a),-sin(a),sin(a),cos(a))*pos.xz;
          vec4 mv=modelViewMatrix*vec4(pos,1.);
          gl_Position=projectionMatrix*mv;
          gl_PointSize=clamp(18.*uPixelRatio/-mv.z,1.,5.);
          vLight=clamp(.55+pos.z*.12, .2, 1.);
        }`,
      fragmentShader: `
        varying float vLight;
        uniform float uProgress;
        void main(){
          float r=length(gl_PointCoord-.5);
          if(r>.5)discard;
          float alpha=smoothstep(.5,.05,r)*vLight*.75;
          vec3 color=mix(vec3(.9,.62,.35),vec3(.45,.78,.82),uProgress);
          gl_FragColor=vec4(color,alpha);
        }`,
    });
    const points = new THREE.Points(geometry, material);
    points.frustumCulled = false; scene.add(points);
    const resize = () => {
      renderer.setSize(innerWidth, innerHeight, false);
      camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
      points.position.set(innerWidth < 768 ? 0 : 1.65, innerWidth < 768 ? -.7 : 0, 0);
      points.scale.setScalar(innerWidth < 768 ? .72 : 1);
    };
    resize();
    const tween = gsap.to(uniforms.uProgress, { value: 1, ease: 'none', scrollTrigger: {
      trigger: stage.value, start: 'top top', end: 'bottom bottom', scrub: true,
      onUpdate: self => { progress.value = self.progress; stage.value?.style.setProperty('--progress', self.progress); },
    }});
    let frame = 0, active = true;
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; }, { rootMargin: '80px' });
    observer.observe(stage.value);
    const start = performance.now();
    const render = () => {
      frame = requestAnimationFrame(render);
      if (document.hidden || !active) return;
      uniforms.uTime.value = (performance.now() - start) / 1000;
      renderer.render(scene, camera);
      canvas.value?.setAttribute('data-progress', uniforms.uProgress.value.toFixed(3));
    };
    available.value = true; render();
    window.addEventListener('resize', resize);
    dispose = () => { destroyed = true; cancelAnimationFrame(frame); observer.disconnect(); tween.scrollTrigger?.kill(); tween.kill(); window.removeEventListener('resize', resize); geometry.dispose(); material.dispose(); renderer.dispose(); };
  } catch (error) { fallback.value = true; console.warn('Homepage animation unavailable; readable fallback retained.', error); }
});
onBeforeUnmount(() => dispose());
</script>

<template>
  <section ref="stage" class="morph-story" :class="{ 'has-webgl': available, 'static-fallback': fallback }" aria-label="博客介绍">
    <div class="morph-viewport">
      <canvas ref="canvas" aria-hidden="true" />
      <div class="morph-shade" />
      <div class="morph-copy intro" :style="{ opacity: Math.max(0, 1 - progress * 4) }">
        <span class="eyebrow">SONGBAICHENG · LOVE AND SHARE</span>
        <h1>你好，<br>欢迎来到我的博客<span>。</span></h1>
        <p>记录学习的路径，分享实践中的发现。<br>从开发与运维，到 AI 与日常探索。</p>
        <a class="morph-link" href="#blog-articles">直接看文章 ↗</a>
      </div>
      <div class="morph-copy middle" :style="{ opacity: Math.max(0, 1 - Math.abs(progress - .46) * 5), visibility: progress > .22 && progress < .7 ? 'visible' : 'hidden' }">
        <span class="eyebrow">学习 · 实践 · 分享</span>
        <h2>把零散的发现，<br>连成自己的知识地图。</h2>
        <p>有些问题在工作里遇见，<br>有些答案在学习中找到。</p>
        <nav><a href="/study/">学习之路 ↗</a><a href="/work-task/">工作实战 ↗</a><a href="/ai/">走进 AI ↗</a></nav>
      </div>
      <div class="morph-copy last" :style="{ opacity: Math.max(0, (progress - .67) * 4), visibility: progress > .67 ? 'visible' : 'hidden' }">
        <span class="eyebrow">最近写下</span>
        <h2>从一篇文章开始。</h2>
        <div class="recent-links"><a v-for="article in articles" :key="article.href" :href="article.href"><small>{{ article.topic }}</small><strong>{{ article.title }}</strong><span>↗</span></a></div>
        <a class="morph-link" href="#blog-articles">全部文章 ↓</a>
      </div>
      <div class="morph-bottom"><span>风起于青萍之末</span><span>向下探索 ↓</span></div>
    </div>
  </section>
  <div id="blog-articles" class="article-anchor" />
</template>

<style scoped>
.morph-story{height:400vh;background:#0c0e11;color:#f1f0ed;position:relative;clip-path:inset(0);--progress:0}
.morph-viewport{position:sticky;top:0;height:100vh;overflow:hidden;background:radial-gradient(ellipse at 78% 48%,#192128 0,transparent 55%),#0c0e11}
canvas{position:fixed;inset:0;width:100%;height:100%;pointer-events:none}
.morph-shade{position:absolute;inset:0;background:linear-gradient(90deg,#0c0e11 0%,#0c0e11c4 28%,transparent 65%);pointer-events:none}
.morph-copy{position:absolute;left:clamp(24px,8vw,140px);top:50%;transform:translateY(-50%);width:min(580px,46vw)}
.eyebrow{font-size:12px;letter-spacing:.13em;color:#b7b7b3}
h1,h2{margin:28px 0;font-weight:500;line-height:1.2;letter-spacing:-.035em;color:inherit;border:0}
h1{font-size:clamp(36px,4.6vw,68px)}h1 span{color:#dba875}h2{font-size:clamp(30px,3.3vw,48px)}
p{font-size:17px;line-height:1.9;color:#b6b8bc;margin:20px 0 32px}
a{color:#f0efeb;text-decoration:none!important}a:hover{color:#e7bd91}a:focus-visible{outline:2px solid #e7bd91;outline-offset:6px}
.morph-link{display:inline-flex;align-items:center;min-height:44px;border-bottom:1px solid #7d7e7c;font-size:15px}
nav{display:flex;flex-wrap:wrap;gap:24px}nav a{min-height:44px;display:flex;align-items:center}
.recent-links{display:grid;margin:20px 0}.recent-links a{display:grid;grid-template-columns:90px 1fr 24px;align-items:center;gap:12px;padding:20px 0;border-bottom:1px solid #ffffff24}.recent-links small{color:#b7b7b3}.recent-links strong{font-size:21px;font-weight:500}
.morph-bottom{position:absolute;bottom:36px;left:8vw;right:8vw;display:flex;justify-content:space-between;font-size:12px;color:#a0a4aa;letter-spacing:.06em}
.article-anchor{scroll-margin-top:80px}
.static-fallback{height:auto}.static-fallback .morph-viewport{height:auto;position:relative;padding:110px 24px 60px}.static-fallback .morph-copy{position:relative;left:auto;top:auto;transform:none;width:min(700px,100%);margin:0 auto 70px;opacity:1!important;visibility:visible!important}.static-fallback .morph-bottom{display:none}
@media(max-width:767px){.morph-copy{left:24px;right:24px;width:auto;top:36%}.morph-shade{background:linear-gradient(#0c0e11db 5%,#0c0e1177 50%,transparent)}h1{font-size:40px}h2{font-size:32px}p{font-size:15px}.morph-bottom{left:24px;right:24px;bottom:24px}.recent-links a{grid-template-columns:76px 1fr 24px}.recent-links strong{font-size:19px}}
@media(prefers-reduced-motion:reduce){.morph-story{height:auto}.morph-viewport{height:auto;position:relative;padding:110px 24px 70px}.morph-copy{position:relative;left:auto;top:auto;transform:none;width:min(700px,100%);margin:0 auto 80px;opacity:1!important;visibility:visible!important}.morph-bottom{display:none}}
</style>
