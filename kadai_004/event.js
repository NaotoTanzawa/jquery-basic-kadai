    // イベントの設定
    // event.htmlをloadした時にconsole.logを実行
    $(window).on('load', () => {
        console.log('loadイベントが発生しました');
    });
    
    // スクロールした時にconsole.logを実行
    $(window).on('scroll', () => {
        console.log('scrollイベントが発生しました');});