const container = document.querySelector("header");
const containerFooter = document.querySelector("footer");
  container.innerHTML = `
  <div class = "logo">
  <span>oasis</span>
  &nbsp;
  <span>mole</span>
</div>
<ul class="nav">
  <li class="nav-item">
      <a class="nav-link active" href="#">메인</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">공모전</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">동아리</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" href="#">스터디</a>
  </li>
</ul>
<!-- search bar -->
<form class="search__bar">
  <input type="text" placeholder="검색" required>
</form>
      `

containerFooter.innerHTML =`
<div>
<div><span>oasis</span>&nbsp;<span>mole</span> </div>
<span>당신이 원하는 이를 oasis mole에서 함께 찾아요</span>
</div>
`