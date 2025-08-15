export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 设置CORS头
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Max-Age': '86400',
    };

    // 处理OPTIONS请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    try {
      // 处理静态资源
      if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/images/')) {
        const response = await env.ASSETS.fetch(request);
        
        // 为静态资源添加缓存头
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Cache-Control', 'public, max-age=31536000'); // 1年缓存
        newHeaders.set('Access-Control-Allow-Origin', '*');
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      }
      
      // 默认返回index.html
      const response = await env.ASSETS.fetch(new Request(new URL('/index.html', request.url)));
      
      // 为HTML添加缓存头
      const newHeaders = new Headers(response.headers);
      newHeaders.set('Cache-Control', 'public, max-age=3600'); // 1小时缓存
      newHeaders.set('Access-Control-Allow-Origin', '*');
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
      
    } catch (error) {
      // 错误处理
      console.error('Error:', error);
      return new Response('Internal Server Error', {
        status: 500,
        headers: corsHeaders,
      });
    }
  }
};
