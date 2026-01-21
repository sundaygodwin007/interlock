// ==================== App State ====================
const appState = {
  currentUser: { id: 1, name: 'You', avatar: '👤' },
  currentPost: { text: '', photo: null, video: null, feeling: '' },
  currentChat: null,
  sidebarOpen: window.innerWidth > 768
};

// ==================== Sample Data ====================
const sampleFriends = [
  { id: 2, name: 'Alice', avatar: '👩', status: 'online', lastSeen: '2 min ago' },
  { id: 3, name: 'Bob', avatar: '👨', status: 'offline', lastSeen: '1 hour ago' },
  { id: 4, name: 'Carol', avatar: '👩‍🦱', status: 'online', lastSeen: 'now' },
  { id: 5, name: 'David', avatar: '👨‍🦲', status: 'online', lastSeen: '5 min ago' },
  { id: 6, name: 'Emma', avatar: '👩‍🦳', status: 'offline', lastSeen: '3 hours ago' },
  { id: 7, name: 'Frank', avatar: '🧔', status: 'online', lastSeen: 'now' }
];

const samplePosts = [
  { 
    id: 1, 
    author: 'Alice', 
    avatar: '👩', 
    time: '2 hours ago', 
    content: 'Just finished an amazing project! 🎉',
    image: null,
    video: null,
    likes: 24,
    liked: false,
    comments: [
      { author: 'Bob', text: 'Congrats!' },
      { author: 'Carol', text: 'Amazing work!' }
    ],
    shares: 5
  },
  { 
    id: 2, 
    author: 'Bob', 
    avatar: '👨', 
    time: '4 hours ago', 
    content: 'Beautiful sunset today 🌅',
    image: null,
    video: null,
    likes: 42,
    liked: false,
    comments: [
      { author: 'Alice', text: 'So pretty!' }
    ],
    shares: 8
  }
];

const sampleReels = [
  { id: 1, author: 'Sarah', avatar: '👩‍🦰', video: 'data:video/mp4,', likes: 120, comments: [], commentCount: 15, liked: false },
  { id: 2, author: 'John', avatar: '👨‍💼', video: 'data:video/mp4,', likes: 89, comments: [], commentCount: 12, liked: false },
  { id: 3, author: 'Lisa', avatar: '👩‍💻', video: 'data:video/mp4,', likes: 156, comments: [], commentCount: 28, liked: false }
];

const sampleConversations = [
  { id: 1, name: 'Alice', avatar: '👩', lastMessage: 'See you tomorrow!', unread: 2 },
  { id: 2, name: 'Bob', avatar: '👨', lastMessage: 'Sounds good', unread: 0 },
  { id: 3, name: 'Carol', avatar: '👩‍🦱', lastMessage: 'Thanks for the update', unread: 1 }
];

const sampleGroups = [
  { id: 1, name: 'Web Dev Community', avatar: '💻', members: 1240, description: 'Discuss web development' },
  { id: 2, name: 'Photography Lovers', avatar: '📸', members: 892, description: 'Share and discuss photos' },
  { id: 3, name: 'Gaming Hub', avatar: '🎮', members: 2156, description: 'Gaming discussions' }
];

const sampleNotifications = [
  { id: 1, type: 'like', user: 'Alice', action: 'liked your post', time: '2 min ago', read: false },
  { id: 2, type: 'comment', user: 'Bob', action: 'commented on your post', time: '15 min ago', read: false },
  { id: 3, type: 'friend', user: 'Carol', action: 'sent you a friend request', time: '1 hour ago', read: true }
];

const samplePhotos = [
  { id: 1, url: '📷', title: 'Vacation pic 1' },
  { id: 2, url: '🖼️', title: 'Art project' },
  { id: 3, url: '🌄', title: 'Nature shot' }
];

const sampleProducts = [
  { id: 1, name: 'Wireless Headphones', price: '$49.99', seller: 'Tech Store', category: 'electronics', emoji: '🎧', rating: 4.5 },
  { id: 2, name: 'Vintage T-Shirt', price: '$24.99', seller: 'Fashion Hub', category: 'fashion', emoji: '👕', rating: 4.2 },
  { id: 3, name: 'Coffee Maker', price: '$89.99', seller: 'Home Goods', category: 'home', emoji: '☕', rating: 4.8 },
  { id: 4, name: 'Sci-Fi Novel', price: '$14.99', seller: 'Book World', category: 'books', emoji: '📚', rating: 4.6 },
  { id: 5, name: 'Running Shoes', price: '$129.99', seller: 'Sports Plus', category: 'sports', emoji: '👟', rating: 4.4 },
  { id: 6, name: 'Board Game', price: '$34.99', seller: 'Game Shop', category: 'toys', emoji: '🎲', rating: 4.7 },
  { id: 7, name: 'Desk Lamp', price: '$39.99', seller: 'Home Goods', category: 'home', emoji: '🔦', rating: 4.3 },
  { id: 8, name: 'Smartwatch', price: '$199.99', seller: 'Tech Store', category: 'electronics', emoji: '⌚', rating: 4.6 },
  { id: 9, name: 'Winter Jacket', price: '$159.99', seller: 'Fashion Hub', category: 'fashion', emoji: '🧥', rating: 4.5 },
  { id: 10, name: 'Plant Pot', price: '$19.99', seller: 'Garden Center', category: 'home', emoji: '🪴', rating: 4.4 },
  { id: 11, name: 'Guitar Strings', price: '$9.99', seller: 'Music Store', category: 'sports', emoji: '🎸', rating: 4.8 },
  { id: 12, name: 'Puzzle Set', price: '$29.99', seller: 'Game Shop', category: 'toys', emoji: '🧩', rating: 4.6 }
];

let liveMessages = [
  { author: 'System', message: '🟢 Live chat is now open!' }
];

// ==================== Initialization ====================
function initApp() {
  initNavigation();
  initPostCreator();
  initFeed();
  initReels();
  initMessages();
  initLiveChat();
  initFriends();
  initGroups();
  initNotifications();
  initPhotos();
  initSettings();
  initDarkMode();
  initBottomMenu();
  updateNotificationBadges();
  handleResponsive();
  
  // Check for hash navigation from market hub (only on first visit from market.html)
  if (window.location.hash && document.referrer.includes('market.html')) {
    const page = window.location.hash.substring(1);
    if (page) {
      navigateTo(page);
    }
  }
  // Clear hash to prevent persistence on refresh
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname);
  }
  
  // Event listeners
  document.getElementById('hamburger').addEventListener('click', toggleSidebar);
  document.getElementById('logoutBtn').addEventListener('click', logout);
  window.addEventListener('resize', handleResponsive);
  document.getElementById('search').addEventListener('input', handleSearch);
  document.getElementById('notifBtn').addEventListener('click', navigateTo.bind(null, 'notifications'));
  document.getElementById('profileMenu').addEventListener('click', toggleProfileDropdown);
  document.getElementById('modal').addEventListener('click', closeModal);
  document.getElementById('modalClose').addEventListener('click', closeModal);
}

// ==================== Navigation ====================
function initNavigation() {
  document.querySelectorAll('#sidenav .nav-menu li').forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      navigateTo(target);
    });
  });
}

function navigateTo(page) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  const targetPage = document.getElementById(page);
  if (targetPage) {
    targetPage.classList.add('active');
    
    // Update sidebar active state
    document.querySelectorAll('#sidenav .nav-menu li').forEach(li => li.classList.remove('active'));
    const activeNav = document.querySelector(`#sidenav [data-target="${page}"]`);
    if (activeNav) activeNav.classList.add('active');
    
    // Update bottom menu active state
    document.querySelectorAll('.bottom-menu-item').forEach(item => item.classList.remove('active'));
    const activeBottomItem = document.querySelector(`.bottom-menu-item[data-target="${page}"]`);
    if (activeBottomItem) activeBottomItem.classList.add('active');
    
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  }
}

function toggleSidebar() {
  appState.sidebarOpen ? closeSidebar() : openSidebar();
}

function openSidebar() {
  document.getElementById('sidenav').classList.add('open');
  document.getElementById('hamburger').classList.add('active');
  appState.sidebarOpen = true;
}

function closeSidebar() {
  document.getElementById('sidenav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('active');
  appState.sidebarOpen = false;
}

function toggleProfileDropdown() {
  const dropdown = document.querySelector('.profile-dropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

function handleResponsive() {
  if (window.innerWidth > 768) {
    openSidebar();
  }
}

// ==================== Post Creator ====================
function initPostCreator() {
  document.getElementById('postPhotoBtn').addEventListener('click', () => {
    document.getElementById('photoFileInput').click();
  });
  
  document.getElementById('postVideoBtn').addEventListener('click', () => {
    document.getElementById('videoFileInput').click();
  });
  
  document.getElementById('postEmojiBtn').addEventListener('click', showEmojiModal);
  document.getElementById('postBtn').addEventListener('click', createPost);
  
  document.getElementById('photoFileInput').addEventListener('change', (e) => handleFileUpload(e, 'photo'));
  document.getElementById('videoFileInput').addEventListener('change', (e) => handleFileUpload(e, 'video'));
  document.getElementById('clearPreviewBtn').addEventListener('click', clearMediaPreview);
}

function handleFileUpload(event, type) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('postPreview');
    if (type === 'photo') {
      appState.currentPost.photo = e.target.result;
      const img = document.getElementById('photoPreview');
      img.src = e.target.result;
      img.style.display = 'block';
    } else if (type === 'video') {
      appState.currentPost.video = e.target.result;
      const video = document.getElementById('videoPreview');
      video.src = e.target.result;
      video.style.display = 'block';
    }
    preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function clearMediaPreview() {
  appState.currentPost.photo = null;
  appState.currentPost.video = null;
  document.getElementById('photoPreview').style.display = 'none';
  document.getElementById('videoPreview').style.display = 'none';
  document.getElementById('postPreview').style.display = 'none';
}

function showEmojiModal() {
  const emojis = ['😊', '😂', '😍', '😢', '😡', '🥳', '🤔', '👏'];
  const modalBody = document.getElementById('modalBody');
  
  modalBody.innerHTML = `
    <h3>How are you feeling?</h3>
    <div class="emoji-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 15px;">
      ${emojis.map(emoji => `
        <button onclick="selectFeeling('${emoji}')" style="font-size: 32px; background: none; border: 2px solid #ccc; border-radius: 8px; padding: 10px; cursor: pointer;">
          ${emoji}
        </button>
      `).join('')}
    </div>
  `;
  
  showModal();
}

function selectFeeling(emoji) {
  appState.currentPost.feeling = emoji;
  closeModal();
  showNotification(`Feeling: ${emoji}`, 'success');
}

function createPost() {
  const text = document.getElementById('postInput').value.trim();
  
  if (!text && !appState.currentPost.photo && !appState.currentPost.video) {
    showNotification('Add text or media to post!', 'error');
    return;
  }
  
  const newPost = {
    id: samplePosts.length + 1,
    author: 'You',
    avatar: '👤',
    time: 'now',
    content: text,
    image: appState.currentPost.photo,
    video: appState.currentPost.video,
    feeling: appState.currentPost.feeling,
    likes: 0,
    liked: false,
    comments: [],
    shares: 0
  };
  
  samplePosts.unshift(newPost);
  document.getElementById('postInput').value = '';
  clearMediaPreview();
  appState.currentPost.feeling = '';
  
  loadFeed();
  showNotification('Post published! 🎉', 'success');
}

// ==================== Feed ====================
function initFeed() {
  loadFeed();
  loadOnlineFriends();
}

function loadFeed() {
  const feedContainer = document.getElementById('feedContainer');
  feedContainer.innerHTML = samplePosts.map(post => createPostElement(post)).join('');
  
  // Attach event listeners
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', toggleLike);
  });
  
  document.querySelectorAll('.comment-toggle').forEach(btn => {
    btn.addEventListener('click', toggleComments);
  });
  
  document.querySelectorAll('.comment-submit').forEach(btn => {
    btn.addEventListener('click', submitComment);
  });
}

function createPostElement(post) {
  return `
    <div class="card post" data-post-id="${post.id}">
      <div class="post-header">
        <div class="post-author">
          <div class="avatar">${post.avatar}</div>
          <div class="author-info">
            <div class="author-name">${post.author}</div>
            <div class="post-time">${post.time}</div>
          </div>
        </div>
        <button class="menu-btn">⋮</button>
      </div>
      
      <div class="post-content">
        <div class="post-text">${post.content} ${post.feeling ? post.feeling : ''}</div>
        ${post.image ? `<img src="${post.image}" class="post-media" style="max-width: 100%; border-radius: 8px; margin-top: 8px;">` : ''}
        ${post.video ? `<video src="${post.video}" controls class="post-media" style="max-width: 100%; border-radius: 8px; margin-top: 8px;"></video>` : ''}
      </div>
      
      <div class="post-stats">
        <span class="like-count">${post.likes} likes</span>
        <span class="comment-count">${post.comments.length} comments</span>
        <span>${post.shares} shares</span>
      </div>
      
      <div class="post-actions">
        <button class="action-btn like-btn" data-post-id="${post.id}" data-liked="${post.liked}">
          ${post.liked ? '❤️' : '🤍'} Like
        </button>
        <button class="action-btn comment-toggle">💬 Comment</button>
        <button class="action-btn">↗️ Share</button>
      </div>
      
      <div class="comments-section" style="display: none; padding: 12px 0; border-top: 1px solid #ddd; margin-top: 12px;">
        <div class="comments-list" style="margin-bottom: 12px;">
          ${post.comments.map(c => `
            <div style="margin-bottom: 8px; padding: 8px; background: #f0f0f0; border-radius: 6px;">
              <strong>${c.author}:</strong> ${c.text}
            </div>
          `).join('')}
        </div>
        <div class="comment-input" style="display: flex; gap: 8px;">
          <input type="text" placeholder="Write a comment..." class="comment-text" style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
          <button class="comment-submit primary-btn">Post</button>
        </div>
      </div>
    </div>
  `;
}

function loadOnlineFriends() {
  const onlineFriends = sampleFriends.filter(f => f.status === 'online');
  const list = document.getElementById('onlineFriends');
  list.innerHTML = onlineFriends.map(f => `
    <li class="friend-item">
      <span class="avatar">${f.avatar}</span>
      <div>
        <div class="friend-name">${f.name}</div>
        <div class="status online">Online</div>
      </div>
    </li>
  `).join('');
}

function toggleLike() {
  const postId = this.getAttribute('data-post-id');
  const post = samplePosts.find(p => p.id == postId);
  
  if (post) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    
    this.setAttribute('data-liked', post.liked);
    this.textContent = `${post.liked ? '❤️' : '🤍'} Like`;
    
    const statsEl = this.closest('.post').querySelector('.like-count');
    statsEl.textContent = `${post.likes} likes`;
  }
}

function toggleComments() {
  const post = this.closest('.post');
  const commentsSection = post.querySelector('.comments-section');
  commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

function submitComment() {
  const post = this.closest('.post');
  const postId = post.getAttribute('data-post-id');
  const commentText = post.querySelector('.comment-text').value.trim();
  
  if (!commentText) return;
  
  const postObj = samplePosts.find(p => p.id == postId);
  if (postObj) {
    postObj.comments.push({ author: 'You', text: commentText });
    post.querySelector('.comment-text').value = '';
    
    const commentsList = post.querySelector('.comments-list');
    const newComment = document.createElement('div');
    newComment.style.cssText = 'margin-bottom: 8px; padding: 8px; background: #f0f0f0; border-radius: 6px;';
    newComment.innerHTML = `<strong>You:</strong> ${commentText}`;
    commentsList.appendChild(newComment);
    
    const countEl = post.querySelector('.comment-count');
    countEl.textContent = `${postObj.comments.length} comments`;
  }
}

// ==================== Reels ====================
function initReels() {
  document.getElementById('createReelBtn').addEventListener('click', showCreateReelModal);
  loadReelsGrid();
}

function showCreateReelModal() {
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h3>Create a Reel</h3>
    <div style="margin-top: 15px;">
      <input type="file" id="reelVideoInput" accept="video/*" style="width: 100%; margin-bottom: 12px;">
      <textarea id="reelCaption" placeholder="Add a caption..." style="width: 100%; padding: 8px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
      <button class="primary-btn" onclick="publishReel()" style="width: 100%;">Publish Reel</button>
    </div>
  `;
  showModal();
}

function publishReel() {
  const videoInput = document.getElementById('reelVideoInput');
  const caption = document.getElementById('reelCaption').value.trim();
  
  if (!videoInput.files[0]) {
    showNotification('Please select a video', 'error');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const newReel = {
      id: sampleReels.length + 1,
      author: 'You',
      avatar: '👤',
      video: e.target.result,
      caption: caption,
      likes: 0,
      comments: 0,
      liked: false
    };
    
    sampleReels.unshift(newReel);
    loadReelsGrid();
    closeModal();
    showNotification('Reel published! 🎬', 'success');
  };
  
  reader.readAsDataURL(videoInput.files[0]);
}

function loadReelsGrid() {
  const reelsGrid = document.getElementById('reelsGrid');
  reelsGrid.innerHTML = `
    <div class="reels-scroll">
      ${sampleReels.map(reel => `
        <div class="reel-card">
          <video src="${reel.video}" controls style="width: 100%; height: 100%; object-fit: cover;"></video>
          <div class="reel-info">
            <div class="reel-author">
              <span>${reel.avatar}</span>
              <span>${reel.author}</span>
            </div>
            <div class="reel-actions">
              <button class="reel-action-btn" onclick="toggleReelLike(${reel.id})">
                ${reel.liked ? '❤️' : '🤍'} ${reel.likes}
              </button>
              <button class="reel-action-btn" onclick="openReelComments(${reel.id})">💬 ${reel.commentCount + reel.comments.length}</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function toggleReelLike(reelId) {
  const reel = sampleReels.find(r => r.id === reelId);
  if (reel) {
    reel.liked = !reel.liked;
    reel.likes += reel.liked ? 1 : -1;
    loadReelsGrid();
  }
}

function openReelComments(reelId) {
  const reel = sampleReels.find(r => r.id === reelId);
  if (!reel) return;
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 12px; height: 400px;">
      <h3>${reel.author}'s Reel Comments</h3>
      <div style="flex: 1; overflow-y: auto; border: 1px solid #ddd; border-radius: 8px; padding: 12px; background: #f9f9f9;">
        <div id="reelCommentsList" style="display: flex; flex-direction: column; gap: 10px;">
          ${reel.comments.length > 0 ? reel.comments.map(comment => `
            <div style="background: white; padding: 8px; border-radius: 6px; border-left: 3px solid #10b981;">
              <div style="font-weight: 500; font-size: 13px;">${comment.author}</div>
              <div style="font-size: 13px; color: #555; margin-top: 4px;">${comment.text}</div>
            </div>
          `).join('') : '<p style="color: #999; text-align: center; padding: 20px;">No comments yet. Be the first to comment!</p>'}
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <input id="reelCommentInput" type="text" placeholder="Add a comment..." style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
        <button onclick="submitReelComment(${reelId})" style="padding: 10px 16px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500;">Post</button>
      </div>
    </div>
  `;
  showModal();
  document.getElementById('reelCommentInput').focus();
}

function submitReelComment(reelId) {
  const reel = sampleReels.find(r => r.id === reelId);
  const input = document.getElementById('reelCommentInput');
  const text = input.value.trim();
  
  if (!text) {
    showNotification('Please enter a comment', 'error');
    return;
  }
  
  if (reel) {
    reel.comments.push({
      author: 'You',
      text: text
    });
    input.value = '';
    openReelComments(reelId);
    loadReelsGrid();
    showNotification('Comment posted! 💬', 'success');
  }
}

// ==================== Messages ====================
function initMessages() {
  document.getElementById('newChatBtn').addEventListener('click', () => {
    showNotification('Feature coming soon!', 'info');
  });
  
  document.getElementById('sendMessageBtn').addEventListener('click', sendMessage);
  document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage.call(document.getElementById('sendMessageBtn'));
  });
  
  loadConversations();
}

function loadConversations() {
  const list = document.getElementById('conversationsList');
  list.innerHTML = sampleConversations.map(conv => `
    <li class="conversation-item" onclick="selectConversation(${conv.id}, '${conv.name}', '${conv.avatar}')">
      <span class="avatar">${conv.avatar}</span>
      <div class="conv-info">
        <div class="conv-name">${conv.name}</div>
        <div class="conv-preview">${conv.lastMessage}</div>
      </div>
      ${conv.unread > 0 ? `<span class="badge">${conv.unread}</span>` : ''}
    </li>
  `).join('');
}

function selectConversation(id, name, avatar) {
  appState.currentChat = id;
  document.getElementById('chatUserName').textContent = name;
  document.getElementById('chatUserStatus').textContent = 'online';
  
  const messagesArea = document.getElementById('messagesArea');
  messagesArea.innerHTML = `
    <div class="message sent">
      <div class="message-content">Hey ${name}!</div>
      <div class="message-time">2:30 PM</div>
    </div>
    <div class="message received">
      <div class="message-content">Hi! How are you?</div>
      <div class="message-time">2:31 PM</div>
    </div>
  `;
  messagesArea.scrollTop = messagesArea.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('messageInput');
  const text = input.value.trim();
  
  if (!text || !appState.currentChat) return;
  
  const messagesArea = document.getElementById('messagesArea');
  const msg = document.createElement('div');
  msg.className = 'message sent';
  msg.innerHTML = `
    <div class="message-content">${text}</div>
    <div class="message-time">now</div>
  `;
  messagesArea.appendChild(msg);
  
  input.value = '';
  messagesArea.scrollTop = messagesArea.scrollHeight;
}

// ==================== Live Chat ====================
function initLiveChat() {
  document.getElementById('sendLiveBtn').addEventListener('click', sendLiveMessage);
  document.getElementById('liveMessageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendLiveMessage.call(document.getElementById('sendLiveBtn'));
  });
  
  loadLiveChat();
}

function loadLiveChat() {
  const container = document.getElementById('liveMessages');
  container.innerHTML = liveMessages.map((msg, i) => `
    <div class="live-message ${i % 2 === 0 ? 'left' : 'right'}" style="margin-bottom: 8px;">
      <strong>${msg.author}:</strong> ${msg.message}
    </div>
  `).join('');
  
  container.scrollTop = container.scrollHeight;
}

function sendLiveMessage() {
  const input = document.getElementById('liveMessageInput');
  const text = input.value.trim();
  
  if (!text) return;
  
  liveMessages.push({ author: 'You', message: text });
  input.value = '';
  loadLiveChat();
}

// ==================== Friends ====================
function initFriends() {
  document.getElementById('friendSearch').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = sampleFriends.filter(f => f.name.toLowerCase().includes(query));
    loadFriendsGrid(filtered);
  });
  
  loadFriendsGrid(sampleFriends);
}

function loadFriendsGrid(friends = sampleFriends) {
  const grid = document.getElementById('friendsGrid');
  grid.innerHTML = friends.map(friend => `
    <div class="friend-card">
      <div style="font-size: 48px; margin-bottom: 12px;">${friend.avatar}</div>
      <div class="friend-name">${friend.name}</div>
      <div class="friend-status ${friend.status}">${friend.status}</div>
      <div style="margin-top: 12px; display: flex; gap: 8px;">
        <button class="primary-btn" style="flex: 1;" onclick="messageFriend('${friend.name}')">Message</button>
        <button class="outline-btn" style="flex: 1;" onclick="addFriend('${friend.name}')">Add</button>
      </div>
    </div>
  `).join('');
}

function messageFriend(friendName) {
  showNotification(`Opening chat with ${friendName}... 💬`, 'success');
  navigateTo('messages');
}

function addFriend(friendName) {
  showNotification(`Friend request sent to ${friendName}! 👥`, 'success');
}

// ==================== Groups ====================
function initGroups() {
  document.getElementById('createGroupBtn').addEventListener('click', showCreateGroupModal);
  loadGroupsGrid();
}

function showCreateGroupModal() {
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <h3>Create a Group</h3>
    <div style="margin-top: 15px;">
      <input type="text" id="groupName" placeholder="Group name" style="width: 100%; padding: 8px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 4px;">
      <textarea id="groupDesc" placeholder="Group description..." style="width: 100%; padding: 8px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
      <button class="primary-btn" onclick="createGroup()" style="width: 100%;">Create Group</button>
    </div>
  `;
  showModal();
}

function createGroup() {
  const name = document.getElementById('groupName').value.trim();
  const desc = document.getElementById('groupDesc').value.trim();
  
  if (!name) {
    showNotification('Enter group name!', 'error');
    return;
  }
  
  const newGroup = {
    id: sampleGroups.length + 1,
    name: name,
    avatar: '👥',
    members: 1,
    description: desc || 'No description'
  };
  
  sampleGroups.push(newGroup);
  loadGroupsGrid();
  closeModal();
  showNotification(`${name} created! 🎉`, 'success');
}

function loadGroupsGrid() {
  const grid = document.getElementById('groupsGrid');
  grid.innerHTML = sampleGroups.map(group => `
    <div class="group-card">
      <div style="font-size: 48px; margin-bottom: 12px;">${group.avatar}</div>
      <div class="group-name">${group.name}</div>
      <div style="font-size: 12px; color: #666; margin-bottom: 8px;">${group.members} members</div>
      <div style="font-size: 13px; margin-bottom: 12px; color: #555;">${group.description}</div>
      <div style="display: flex; gap: 8px;">
        <button class="primary-btn" style="flex: 1;">Join</button>
        <button class="outline-btn" style="flex: 1;">View</button>
      </div>
    </div>
  `).join('');
}

// ==================== Notifications ====================
function initNotifications() {
  document.getElementById('markAllRead').addEventListener('click', markAllRead);
  loadNotifications();
}

function loadNotifications() {
  const list = document.getElementById('notificationsList');
  list.innerHTML = sampleNotifications.map(notif => `
    <li class="notification-item ${notif.read ? 'read' : 'unread'}" onclick="markNotifRead(${notif.id})">
      <span class="notif-icon">${notif.type === 'like' ? '❤️' : notif.type === 'comment' ? '💬' : '👥'}</span>
      <div class="notif-content">
        <strong>${notif.user}</strong> ${notif.action}
        <div class="notif-time">${notif.time}</div>
      </div>
    </li>
  `).join('');
  
  updateNotificationBadges();
}

function markNotifRead(id) {
  const notif = sampleNotifications.find(n => n.id === id);
  if (notif) {
    notif.read = true;
    loadNotifications();
  }
}

function markAllRead() {
  sampleNotifications.forEach(n => n.read = true);
  loadNotifications();
}

function updateNotificationBadges() {
  const unreadCount = sampleNotifications.filter(n => !n.read).length;
  const notifBadge = document.getElementById('notifBadge');
  
  if (unreadCount > 0) {
    notifBadge.textContent = unreadCount;
    notifBadge.classList.remove('hidden');
  } else {
    notifBadge.classList.add('hidden');
  }
}

// ==================== Photos ====================
function initPhotos() {
  document.getElementById('uploadPhotoBtn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      if (e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (re) => {
          samplePhotos.push({ id: samplePhotos.length + 1, url: re.target.result, title: 'New photo' });
          loadPhotos();
          showNotification('Photo uploaded! 📸', 'success');
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    };
    input.click();
  });
  
  loadPhotos();
}

function loadPhotos() {
  const grid = document.getElementById('photosGrid');
  grid.innerHTML = samplePhotos.map(photo => `
    <div class="photo-item">
      <img src="${photo.url}" alt="${photo.title}" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 8px;">
      <div style="padding: 8px;">
        <div style="font-weight: 500;">${photo.title}</div>
      </div>
    </div>
  `).join('');
}

// ==================== Settings ====================
function initSettings() {
  document.querySelectorAll('[data-settings]').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('[data-settings]').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.settings-section').forEach(s => s.classList.remove('active'));
      
      tab.classList.add('active');
      const target = tab.getAttribute('data-settings');
      const section = document.getElementById(target);
      if (section) section.classList.add('active');
    });
  });
  
  document.getElementById('darkModeToggle').addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked);
    localStorage.setItem('darkMode', e.target.checked);
  });
  
  document.getElementById('saveGeneralBtn').addEventListener('click', () => {
    showNotification('Changes saved! ✅', 'success');
  });
  
  document.getElementById('savePrivacyBtn').addEventListener('click', () => {
    showNotification('Privacy settings updated! ✅', 'success');
  });
  
  document.getElementById('saveNotifBtn').addEventListener('click', () => {
    showNotification('Notification preferences saved! ✅', 'success');
  });
  
  document.getElementById('saveAppearanceBtn').addEventListener('click', () => {
    showNotification('Appearance settings saved! ✅', 'success');
  });
}

// ==================== Dark Mode ====================
function initDarkMode() {
  const isDark = localStorage.getItem('darkMode') === 'true';
  if (isDark) {
    document.body.classList.add('dark');
    document.getElementById('darkModeToggle').checked = true;
  }
  
  document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkNow = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkNow);
  });
}

// ==================== Modal ====================
function showModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('hidden');
  
  // Prevent modal from closing when clicking inside the modal content
  const modalContent = modal.querySelector('.modal-content');
  modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
  });
  
  // Close modal only when clicking on the dark overlay background
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// ==================== Notifications & Utils ====================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `toast-notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    border-radius: 4px;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  if (!query) return;
  console.log('Searching for:', query);
}

function logout() {
  showNotification('Logged out! 👋', 'info');
  setTimeout(() => {
    window.location.href = '/';
  }, 1500);
}

// ==================== Bottom Menu ====================
function initBottomMenu() {
  document.querySelectorAll('.bottom-menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      navigateTo(target);
      
      // Update active state
      document.querySelectorAll('.bottom-menu-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  
  // Set initial active state based on current page
  const feedPage = document.querySelector('#feed.active');
  if (feedPage) {
    document.querySelector('[data-target="feed"]') && document.querySelector('[data-target="feed"]').classList.add('active');
  }
}

// ==================== Start App ====================
document.addEventListener('DOMContentLoaded', initApp);