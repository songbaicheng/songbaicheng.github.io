import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,e as r}from"./app-f5ca7e75.js";const a={},h=r('<h1 id="spring-security-oauth2" tabindex="-1"><a class="header-anchor" href="#spring-security-oauth2" aria-hidden="true">#</a> Spring Security + OAuth2</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><h2 id="oauth2" tabindex="-1"><a class="header-anchor" href="#oauth2" aria-hidden="true">#</a> OAuth2</h2><p>OAuth 2.0（开放授权 2.0）是一种授权框架，用于允许用户授权第三方应用程序访问其在另一个应用程序（如社交媒体、电子邮件服务或云存储服务）上的受保护资源，而无需向第三方应用程序共享其凭据（例如用户名和密码）。其主要职责就是实现一个三方互信的功能，目前网站上支持的第三方登录就是 OAuth 协议的实现。OAuth 2.0 的核心概念包括以下角色：</p><ul><li>资源所有者（Resource Owner）：资源所有者是指控制受保护资源的用户，例如网站用户或移动应用程序用户。</li><li>客户端（Client）：客户端是请求访问受保护资源的第三方应用程序，它通过 OAuth 2.0 协议与身份和授权服务器进行交互。</li><li>身份和授权服务器（Authorization Server）：身份和授权服务器负责验证资源所有者的身份，并根据资源所有者的授权向客户端颁发访问令牌。</li><li>受保护资源服务器（Resource Server）：受保护资源服务器托管受保护的用户数据或服务，只有在经过授权的情况下才能访问。</li></ul><p>OAuth 2.0 的工作流程如下：</p><ol><li>客户端向资源所有者请求授权，以访问其受保护资源。这可以通过重定向资源所有者到身份和授权服务器的授权页面来实现。</li><li>资源所有者向身份和授权服务器提供其凭据（例如用户名和密码），并授权客户端访问受保护资源。</li><li>身份和授权服务器验证资源所有者的身份，并生成一个访问令牌（Access Token）。</li><li>身份和授权服务器将访问令牌颁发给客户端。</li><li>客户端使用访问令牌向受保护资源服务器发起请求，并在请求中提供访问令牌作为身份验证凭据。</li></ol><p>OAuth 2.0 的优势在于它根据受保护资源服务器验证访问令牌的有效性，并根据访问令牌决定是否授权客户端访问受保护资源，使得用户可以授予对其受保护资源的有限访问权限，而无需共享其凭据。这提供了更好的安全性和用户隐私保护。此外，OAuth 2.0 支持多种授权流程，如授权码授权流程、隐式授权流程、密码授权流程和客户端凭据授权流程，以满足不同应用场景的需求。</p>',8),l=[h];function o(u,c){return i(),t("div",null,l)}const d=e(a,[["render",o],["__file","spring-security-oauth2.html.vue"]]);export{d as default};
