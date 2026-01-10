(function () {
  const initAplayerScroll = () => {
    // 1. 获取目标元素
    const target = document.getElementById('aplayer');

    // 2. 容错判断：如果当前页面没这个元素，直接结束，不执行后续逻辑
    if (!target) return;

    // 3. 核心滚动逻辑
    const handleScroll = () => {
      // 获取滚动距离（兼容各浏览器）
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // 超过 100px 则添加类名，否则移除
      if (scrollTop > 95) {
        target.classList.add('aplayer-active');
      } else {
        target.classList.remove('aplayer-active');
      }
    };

    // 4. 监听滚动事件（增加节流以优化性能）
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // 5. 初始化执行一次，防止刷新页面时已在滚动条下方
    handleScroll();
  };

  // 确保 DOM 加载后运行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAplayerScroll);
  } else {
    initAplayerScroll();
  }
})();


const btn = document.querySelector('.aplayer-miniswitcher .aplayer-icon');
const list = document.querySelector('.aplayer-list');

document.addEventListener('click', (e) => {
    // 1. 检查点击的是否是切换按钮或其图标
    const toggleBtn = e.target.closest('.aplayer-miniswitcher .aplayer-icon');
    
    if (toggleBtn) {
        const list = document.querySelector('.aplayer-list');
        if (list) {
            list.classList.toggle('aplayer-list-show');
        }
    }
});

const info = document.querySelector('.aplayer-info');

document.addEventListener('click', (e) => {
    // 1. 检查点击的是否是切换按钮或其图标
    const toggleBtn = e.target.closest('.aplayer-miniswitcher .aplayer-icon');
    
    if (toggleBtn) {
        const list = document.querySelector('.aplayer-info');
        if (list) {
            list.classList.toggle('aplayer-info-show');
        }
    }
});

