// Bloomland Market - Sample Products Database
const products = [
    {
        id: 1,
        name: "Red Rose Bouquet",
        price: 29.99,
        category: "Flowers",
        rating: 4.8,
        reviews: 124,
        emoji: "🌹",
        images: ["🌹", "💐", "🌷", "❤️"],
        description: "Beautiful fresh red roses imported from Ecuador. Perfect for romantic occasions.",
        details: "12 premium quality stems, lasts 7-10 days, comes with flower food.",
        stock: 50
    },
    {
        id: 2,
        name: "Monstera Plant",
        price: 45.99,
        category: "Plants",
        rating: 4.6,
        reviews: 89,
        emoji: "🌿",
        images: ["🌿", "🪴", "🌱", "🍃"],
        description: "Popular houseplant with beautiful split leaves. Easy to care for.",
        details: "8 inches tall, well-rooted, includes care instructions.",
        stock: 25
    },
    {
        id: 3,
        name: "Tomato Seeds",
        price: 12.99,
        category: "Seeds",
        rating: 4.9,
        reviews: 234,
        emoji: "🍅",
        images: ["🍅", "🌱", "🌿", "🥗"],
        description: "Premium organic tomato seeds. High germination rate guaranteed.",
        details: "100 seeds per packet, non-GMO, certified organic.",
        stock: 100
    },
    {
        id: 4,
        name: "Sunflower Bundle",
        price: 34.99,
        category: "Flowers",
        rating: 4.7,
        reviews: 56,
        emoji: "🌻",
        images: ["🌻", "🌼", "🌞", "☀️"],
        description: "Bright and cheerful sunflowers to brighten any room.",
        details: "10 stems, 3-4 week lifespan, environmentally friendly packaging.",
        stock: 35
    },
    {
        id: 5,
        name: "Peace Lily",
        price: 38.99,
        category: "Plants",
        rating: 4.5,
        reviews: 67,
        emoji: "🪴",
        images: ["🪴", "🌿", "⚪", "🌱"],
        description: "Elegant peace lily with white flowers. Helps purify air.",
        details: "10 inches tall, thrives in low light, minimal watering needed.",
        stock: 20
    },
    {
        id: 6,
        name: "Basil Seeds",
        price: 9.99,
        category: "Seeds",
        rating: 4.8,
        reviews: 178,
        emoji: "🌱",
        images: ["🌱", "🌿", "🍃", "👨‍🌾"],
        description: "Fresh basil seeds for your kitchen garden. Great for cooking.",
        details: "150 seeds, fast growing, ready in 3-4 weeks.",
        stock: 80
    },
    {
        id: 7,
        name: "Tulip Collection",
        price: 32.99,
        category: "Flowers",
        rating: 4.6,
        reviews: 92,
        emoji: "🌷",
        images: ["🌷", "🌹", "🌸", "💐"],
        description: "Assorted colorful tulips for spring arrangements.",
        details: "15 mixed color stems, long-lasting, includes vase.",
        stock: 45
    },
    {
        id: 8,
        name: "Snake Plant",
        price: 42.99,
        category: "Plants",
        rating: 4.9,
        reviews: 201,
        emoji: "🌾",
        images: ["🌾", "🌿", "🪴", "🍃"],
        description: "Hardy succulent plant. Perfect for beginners. Extremely low maintenance.",
        details: "12 inches tall, drought tolerant, elegant pot included.",
        stock: 30
    },
    {
        id: 9,
        name: "Mixed Vegetable Seeds",
        price: 19.99,
        category: "Seeds",
        rating: 4.7,
        reviews: 145,
        emoji: "🥕",
        images: ["🥕", "🌽", "🥬", "🍅"],
        description: "Complete starter pack with 5 different vegetable seeds.",
        details: "500+ total seeds, all organic, detailed growing guide included.",
        stock: 60
    },
    {
        id: 10,
        name: "Lily Arrangement",
        price: 49.99,
        category: "Flowers",
        rating: 4.8,
        reviews: 78,
        emoji: "🌸",
        images: ["🌸", "🌺", "💐", "🎀"],
        description: "Premium lily arrangement with greenery. Elegant and fragrant.",
        details: "8 stems, lasts 2 weeks, luxury gift box included.",
        stock: 15
    },
    {
        id: 11,
        name: "Spider Plant",
        price: 35.99,
        category: "Plants",
        rating: 4.7,
        reviews: 112,
        emoji: "🕷️",
        images: ["🕷️", "🌿", "🪴", "🌱"],
        description: "Charming spider plant with hanging baby plants.",
        details: "9 inches tall, produces babies for propagation, modern pot.",
        stock: 25
    },
    {
        id: 12,
        name: "Orchid Seeds",
        price: 24.99,
        category: "Seeds",
        rating: 4.6,
        reviews: 89,
        emoji: "🌺",
        images: ["🌺", "🌸", "💜", "✨"],
        description: "Rare orchid seeds for collectors. Beautiful exotic flowers.",
        details: "50 premium seeds, propagation guide, takes 2-3 years to bloom.",
        stock: 40
    },
    {
        id: 13,
        name: "Cherry Blossoms",
        price: 44.99,
        category: "Flowers",
        rating: 4.9,
        reviews: 156,
        emoji: "🌸",
        images: ["🌸", "🌺", "💗", "🌷"],
        description: "Delicate cherry blossoms. Symbolizes renewal and beauty.",
        details: "12 branches, lasts 10-14 days, perfect for special events.",
        stock: 20
    },
    {
        id: 14,
        name: "Cactus Collection",
        price: 39.99,
        category: "Plants",
        rating: 4.8,
        reviews: 203,
        emoji: "🌵",
        images: ["🌵", "🪨", "☀️", "🌞"],
        description: "Set of 3 different cacti varieties. Perfect for sunny spots.",
        details: "3 plants, decorative ceramic pots, care instructions.",
        stock: 35
    },
    {
        id: 15,
        name: "Flower Seed Mix",
        price: 15.99,
        category: "Seeds",
        rating: 4.7,
        reviews: 167,
        emoji: "🌼",
        images: ["🌼", "🌻", "🌷", "🌸"],
        description: "Mix of wildflower seeds. Creates a beautiful garden display.",
        details: "1000+ seeds, 12+ varieties, blooms throughout season.",
        stock: 70
    }
];

let cart = [];
let currentProduct = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    loadCategories();
});

// Load products to grid
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    const count = document.getElementById('productCountDiv');
    
    grid.innerHTML = products.map(product => `
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-3">
            <div class="text-6xl text-center mb-2 cursor-pointer" onclick="openProductModal(${product.id})">${product.emoji}</div>
            <div onclick="openProductModal(${product.id})" class="cursor-pointer">
                <h3 class="font-bold text-sm truncate">${product.name}</h3>
                <p class="text-emerald-600 font-bold text-lg mb-1">$${product.price.toFixed(2)}</p>
                <div class="flex items-center justify-between text-xs">
                    <span class="text-yellow-500">★ ${product.rating}</span>
                    <span class="text-gray-500">${product.reviews} reviews</span>
                </div>
                <span class="text-xs text-gray-500 mt-2 inline-block">${product.category}</span>
            </div>
            <button onclick="quickBuy(${product.id})" class="w-full mt-2 bg-green-600 text-white py-2 px-2 rounded text-xs font-bold hover:bg-green-700 transition-colors">
                🛒 Add to Cart
            </button>
        </div>
    `).join('');
    
    count.textContent = `Found ${products.length} products`;
}

// Load categories
function loadCategories() {
    const container = document.getElementById('categoriesContainer');
    const categories = [...new Set(products.map(p => p.category))];
    
    container.innerHTML = categories.map(cat => `
        <label class="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" value="${cat}" onchange="filterProducts()" class="w-4 h-4 text-green-600 rounded"/>
            <span class="text-gray-700">${cat}</span>
        </label>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('sortSelect').addEventListener('change', filterProducts);
    document.getElementById('priceRange').addEventListener('input', (e) => {
        document.getElementById('maxPrice').textContent = e.target.value;
        filterProducts();
    });
    
    document.getElementById('sellBtn').addEventListener('click', openAdvertiseModal);
    document.getElementById('cartBtn').addEventListener('click', openCartSidebar);
    
    // Close buttons
    document.querySelectorAll('.closeProductModal').forEach(btn => {
        btn.addEventListener('click', closeProductModal);
    });
    
    document.querySelectorAll('.closeAdvertiseModal').forEach(btn => {
        btn.addEventListener('click', closeAdvertiseModal);
    });
    
    document.querySelectorAll('.closeCart').forEach(btn => {
        btn.addEventListener('click', closeCartSidebar);
    });
    
    document.querySelectorAll('.closeCheckout').forEach(btn => {
        btn.addEventListener('click', closeCheckoutModal);
    });
    
    // Modal buttons
    document.getElementById('addToCartFromModal').addEventListener('click', addToCart);
    document.getElementById('buyNowFromModal').addEventListener('click', () => {
        // Add to cart temporarily for checkout, but go straight to checkout without showing cart notification
        const currentProduct = products.find(p => p.id == window.currentProductId);
        if (currentProduct) {
            const existingItem = cart.find(item => item.id === currentProduct.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id: currentProduct.id,
                    name: currentProduct.name,
                    price: currentProduct.price,
                    emoji: currentProduct.emoji,
                    quantity: 1
                });
            }
            updateCartUI();
        }
        openCheckoutModal();
    });
    
    document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
    
    // Forms
    document.getElementById('advertiseFormElement').addEventListener('submit', submitAdvertise);
    document.getElementById('checkoutFormElement').addEventListener('submit', submitCheckout);
    
    // Delivery method change
    document.querySelectorAll('input[name="deliveryOption"]').forEach(radio => {
        radio.addEventListener('change', updateCheckoutTotal);
    });
    
    // Ad duration change
    document.querySelectorAll('input[name="adDuration"]').forEach(radio => {
        radio.addEventListener('change', updateAdTotal);
    });
    
    // Close modals on background click
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal') closeProductModal();
    });
    
    document.getElementById('advertiseModal').addEventListener('click', (e) => {
        if (e.target.id === 'advertiseModal') closeAdvertiseModal();
    });
    
    document.getElementById('cartSidebar').addEventListener('click', (e) => {
        if (e.target.id === 'cartSidebar') closeCartSidebar();
    });
    
    document.getElementById('checkoutModal').addEventListener('click', (e) => {
        if (e.target.id === 'checkoutModal') closeCheckoutModal();
    });
}

// Filter products
function filterProducts() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const categories = Array.from(document.querySelectorAll('#categoriesContainer input:checked'))
        .map(cb => cb.value);
    const maxPrice = parseFloat(document.getElementById('priceRange').value);
    const sortBy = document.getElementById('sortSelect').value;
    
    let filtered = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(search) || 
                           p.category.toLowerCase().includes(search);
        const matchCategory = categories.length === 0 || categories.includes(p.category);
        const matchPrice = p.price <= maxPrice;
        return matchSearch && matchCategory && matchPrice;
    });
    
    // Sort
    switch(sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        default:
            filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // Display results
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const count = document.getElementById('productCountDiv');
    
    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        count.textContent = 'Found 0 products';
    } else {
        noResults.classList.add('hidden');
        grid.innerHTML = filtered.map(product => `
            <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-3">
                <div class="text-6xl text-center mb-2 cursor-pointer" onclick="openProductModal(${product.id})">${product.emoji}</div>
                <div onclick="openProductModal(${product.id})" class="cursor-pointer">
                    <h3 class="font-bold text-sm truncate">${product.name}</h3>
                    <p class="text-emerald-600 font-bold text-lg mb-1">$${product.price.toFixed(2)}</p>
                    <div class="flex items-center justify-between text-xs">
                        <span class="text-yellow-500">★ ${product.rating}</span>
                        <span class="text-gray-500">${product.reviews} reviews</span>
                    </div>
                    <span class="text-xs text-gray-500 mt-2 inline-block">${product.category}</span>
                </div>
                <button onclick="quickBuy(${product.id})" class="w-full mt-2 bg-green-600 text-white py-2 px-2 rounded text-xs font-bold hover:bg-green-700 transition-colors">
                    🛒 Add to Cart
                </button>
            </div>
        `).join('');
        count.textContent = `Found ${filtered.length} products`;
    }
}

// Product Modal Functions
function openProductModal(id) {
    currentProduct = products.find(p => p.id === id);
    
    document.getElementById('productModalTitle').textContent = currentProduct.name;
    document.getElementById('productMainImage').textContent = currentProduct.emoji;
    document.getElementById('productCategoryBadge').textContent = currentProduct.category;
    document.getElementById('productPrice').textContent = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('productRating').textContent = currentProduct.rating;
    document.getElementById('productReviews').textContent = `(${currentProduct.reviews} reviews)`;
    document.getElementById('productDescription').textContent = currentProduct.description;
    document.getElementById('productDetails').textContent = currentProduct.details;
    document.getElementById('productStock').textContent = `${currentProduct.stock} in stock`;
    
    // Load thumbnails
    const thumbnails = document.getElementById('productThumbnails');
    thumbnails.innerHTML = currentProduct.images.map((img, index) => `
        <button onclick="changeMainImage('${img}')" class="text-4xl p-2 border-2 border-gray-200 rounded hover:border-green-500 transition-colors">
            ${img}
        </button>
    `).join('');
    
    document.getElementById('productModal').classList.remove('hidden');
}

function changeMainImage(emoji) {
    document.getElementById('productMainImage').textContent = emoji;
}

function quickBuy(id) {
    currentProduct = products.find(p => p.id === id);
    addToCart();
}

function closeProductModal() {
    document.getElementById('productModal').classList.add('hidden');
    currentProduct = null;
}

// Cart Functions
function addToCart() {
    if (!currentProduct) return;
    
    const existing = cart.find(item => item.id === currentProduct.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({...currentProduct, quantity: 1});
    }
    
    updateCartUI();
    closeProductModal();
    showNotification(`Added ${currentProduct.name} to cart!`);
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countEl = document.getElementById('cartCount');
    
    if (count > 0) {
        countEl.textContent = count;
        countEl.classList.remove('hidden');
    } else {
        countEl.classList.add('hidden');
    }
    
    // Update cart sidebar
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        emptyCart.classList.remove('hidden');
        cartContent.classList.add('hidden');
    } else {
        emptyCart.classList.add('hidden');
        cartContent.classList.remove('hidden');
        
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = cart.map(item => `
            <div class="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <span class="text-3xl">${item.emoji}</span>
                    <div>
                        <p class="font-bold text-sm">${item.name}</p>
                        <p class="text-gray-500 text-xs">$${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-200 px-2 py-1 rounded text-xs">−</button>
                    <span class="w-6 text-center text-sm">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-200 px-2 py-1 rounded text-xs">+</button>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
    }
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

function openCartSidebar() {
    document.getElementById('cartSidebar').classList.remove('hidden');
}

function closeCartSidebar() {
    document.getElementById('cartSidebar').classList.add('hidden');
}

// Advertise Modal
function openAdvertiseModal() {
    document.getElementById('advertiseModal').classList.remove('hidden');
    document.getElementById('advertiseForm').classList.remove('hidden');
    document.getElementById('advertiseComplete').classList.add('hidden');
}

function closeAdvertiseModal() {
    document.getElementById('advertiseModal').classList.add('hidden');
}

function updateAdTotal() {
    const duration = document.querySelector('input[name="adDuration"]:checked').value;
    const fees = {7: 19.99, 30: 49.99, 90: 129.99};
    const adFee = fees[duration];
    const processingFee = 2.99;
    const total = adFee + processingFee;
    
    document.getElementById('adFee').textContent = `$${adFee.toFixed(2)}`;
    document.getElementById('adTotal').textContent = `$${total.toFixed(2)}`;
}

function submitAdvertise(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const duration = document.querySelector('input[name="adDuration"]:checked').value;
    const fees = {7: 19.99, 30: 49.99, 90: 129.99};
    const total = fees[duration] + 2.99;
    
    document.getElementById('advertiseForm').classList.add('hidden');
    document.getElementById('advertiseComplete').classList.remove('hidden');
    
    document.getElementById('advertiseThankYou').textContent = `Thank you, ${formData.get('sellerName')}!`;
    document.getElementById('advertiseProductName').textContent = `Your "${formData.get('productName')}" is now live on Bloomland`;
    document.getElementById('advertiseListingId').innerHTML = `Listing ID: <span class="font-bold">#BL${Math.random().toString(36).substr(2, 9).toUpperCase()}</span>`;
    document.getElementById('advertiseDuration').innerHTML = `Duration: <span class="font-bold">${duration} Days</span>`;
    document.getElementById('advertisePaid').innerHTML = `Amount Paid: <span class="font-bold text-emerald-600">$${total.toFixed(2)}</span>`;
    document.getElementById('advertiseEmail').innerHTML = `
        <p>Confirmation email sent to:</p>
        <p class="font-medium">${formData.get('sellerEmail')}</p>
    `;
}

// Checkout Modal
function openCheckoutModal() {
    closeCartSidebar();
    document.getElementById('checkoutModal').classList.remove('hidden');
    document.getElementById('checkoutForm').classList.remove('hidden');
    document.getElementById('orderComplete').classList.add('hidden');
    
    // Populate checkout items
    const checkoutItems = document.getElementById('checkoutItems');
    checkoutItems.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center text-sm">
            <span>${item.name} x ${item.quantity}</span>
            <span class="font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    updateCheckoutTotal();
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.add('hidden');
}

function updateCheckoutTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = {standard: 5.99, express: 15.99, pickup: 0};
    const deliveryMethod = document.querySelector('input[name="deliveryOption"]:checked').value;
    const deliveryCost = delivery[deliveryMethod];
    const tax = (subtotal + deliveryCost) * 0.08;
    const grandTotal = subtotal + deliveryCost + tax;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('deliveryCost').textContent = `$${deliveryCost.toFixed(2)}`;
    document.getElementById('taxAmount').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `$${grandTotal.toFixed(2)}`;
}

function submitCheckout(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = {standard: 5.99, express: 15.99, pickup: 0};
    const deliveryMethod = document.querySelector('input[name="deliveryOption"]:checked').value;
    const deliveryCost = delivery[deliveryMethod];
    const grandTotal = (subtotal + deliveryCost) * 1.08;
    
    document.getElementById('checkoutForm').classList.add('hidden');
    document.getElementById('orderComplete').classList.remove('hidden');
    
    document.getElementById('orderThankYou').textContent = `Thank you, ${formData.get('fullName')}!`;
    document.getElementById('orderConfirmation').innerHTML = `A confirmation email has been sent to <span class="font-medium">${formData.get('email')}</span>`;
    document.getElementById('orderNumber').innerHTML = `Order Number: <span class="font-bold">#ORD${Math.random().toString(36).substr(2, 9).toUpperCase()}</span>`;
    document.getElementById('orderTotal').innerHTML = `Total Paid: <span class="font-bold text-green-600">$${grandTotal.toFixed(2)}</span>`;
    document.getElementById('orderAddress').innerHTML = `
        <p>Your order will be delivered to:</p>
        <p class="font-medium">${formData.get('address')}, ${formData.get('city')}, ${formData.get('state')} ${formData.get('zipCode')}</p>
    `;
    
    // Clear cart
    setTimeout(() => {
        cart = [];
        updateCartUI();
        closeCheckoutModal();
        window.location.href = 'index.html';
    }, 3000);
}

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}
