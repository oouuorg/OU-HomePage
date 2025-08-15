export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    try {
      // 直接返回静态资源
      return env.ASSETS.fetch(request);
    } catch (error) {
      // 如果文件不存在，返回index.html
      return env.ASSETS.fetch(new Request(new URL('/index.html', request.url)));
    }
  }
};
