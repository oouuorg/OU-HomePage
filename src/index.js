export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userIP = request.headers.get('CF-Connecting-IP') || '未知IP';
    
    try {
      // 如果是请求IP的API
      if (url.pathname === '/api/ip') {
        return new Response(JSON.stringify({ ip: userIP }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
      
      // 获取静态资源响应
      let response = await env.ASSETS.fetch(request);
      
      // 如果是HTML文件，注入IP信息
      const contentType = response.headers.get('Content-Type') || '';
      if (contentType.includes('text/html')) {
        let html = await response.text();
        
        // 在页面加载完成后获取IP
        const scriptToInject = `
          <script>
            // 页面加载完成后获取IP
            window.addEventListener('DOMContentLoaded', function() {
              fetch('/api/ip')
                .then(response => response.json())
                .then(data => {
                  document.getElementById('user-ip').textContent = data.ip;
                })
                .catch(error => {
                  document.getElementById('user-ip').textContent = '获取失败';
                  console.error('获取IP失败:', error);
                });
            });
          </script>
        `;
        
        // 在</body>前注入脚本
        html = html.replace('</body>', scriptToInject + '</body>');
        
        // 创建新的响应
        response = new Response(html, response);
      }
      
      return response;
    } catch (error) {
      // 如果文件不存在，返回index.html
      return env.ASSETS.fetch(new Request(new URL('/index.html', request.url)));
    }
  }
};
