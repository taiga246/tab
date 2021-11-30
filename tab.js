(() =>
{
  //WebページのDOM要素全体を取得
  const $doc = document;

  const $tab = document.getElementById("js-tab");
  const $nav = $tab.querySelectorAll("[data-nav]");
  const $content = $tab.querySelectorAll("[data-content]");
  const ACTIVE_CLASS = 'is-active';
  const navLen = $nav.length;

  //初期化関数
  const init = () =>
  {
    //一つ目の要素だけ見えるようにするためにblockを使う
    $content[0].style.display = "block";
  };

  init();

  //クリックしたら起こるイベント
  const handleClick = (e) =>
  {
    //リンク要素を無効化
    e.preventDefault();

    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    //対象外のnav,contentを全て一旦リセット
    let index = 0;
    while(index < navLen)
    {
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS);
      index++;
    }

    //対象のコンテンツをアクティブ化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
    $nav[targetVal].classList.add(ACTIVE_CLASS);
  };

  //全nav要素に対して関数を適応
  let index =0;
  while(index < navLen)
  {
    $nav[index].addEventListener("click",(e) => handleClick(e));
    index++;
  }
})();
