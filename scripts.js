const onlineUsers = ['푸리나', '네페르', '마비카', '아를레키노', '차스카'];

document.addEventListener('DOMContentLoaded', () => {
  // 1. 유저 리스트 생성 (.user 제거)
  const list = document.getElementById('online-users');
  onlineUsers.forEach(user => {
    const li = document.createElement('li');
    li.style.padding = "6px 0";
    // .user 없이 이름만 표시
    li.innerHTML = `<span style="color: #4caf50; margin-right: 8px;">●</span>${user}`;
    list.appendChild(li);
  });

  // 2. 마우스 오른쪽 사이드바 감지
  const sidebar = document.getElementById('online-users-sidebar');
  document.addEventListener('mousemove', (e) => {
    const distance = window.innerWidth - e.clientX;
    if (distance < 60) {
      sidebar.classList.add('active');
    } else if (distance > 220) {
      sidebar.classList.remove('active');
    }
  });

  // 3. 사진 슬라이드 (100% 이동)
  const slideshow = document.querySelector('.slideshow');
  const slides = document.querySelectorAll('.slideshow img');
  let currentIndex = 0;

  setInterval(() => {
    if (slides.length <= 1) return;
    currentIndex = (currentIndex + 1) % slides.length;
    slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 4500);

  // 4. 터미널 입력 기능
  const input = document.getElementById('comment-input');
  const commentList = document.getElementById('comment-list');
  
  document.getElementById('add-comment-btn').onclick = () => {
    const text = input.value.trim();
    if (!text) return;
    const log = document.createElement('div');
    log.innerHTML = `<span style="color: #6a9955;">[${new Date().toLocaleTimeString()}]</span> ${text}`;
    commentList.appendChild(log);
    commentList.scrollTop = commentList.scrollHeight;
    input.value = "";
  };
});