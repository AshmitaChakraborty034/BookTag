const books = [
    {
        id: 1,
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        description:
            "Enter the brutal and elite world of dragon riders in this #1 New York Times bestselling fantasy sensation.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701980900i/61431922.jpg",
        price: 29.99,
        category: "fantasy",
        rating: 4.7,
        reviews: 2500,
        publishDate: "2023-05-02",
        inStock: true,
        stockQuantity: 70,
    },
    {
        id: 2,
        title: "Iron Flame",
        author: "Rebecca Yarros",
        description:
            "The highly anticipated sequel to Fourth Wing continues the thrilling saga of dragon riders and their bonds.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1706724269i/90202302.jpg",
        price: 32.00,
        category: "fantasy",
        rating: 4.8,
        reviews: 2100,
        publishDate: "2023-11-07",
        inStock: true,
        stockQuantity: 55,
    },
    {
        id: 3,
        title: "Hello Beautiful",
        author: "Ann Napolitano",
        description:
            "A gorgeous, propulsive novel about a young woman's coming-of-age, and a profound meditation on the bonds of sisterhood.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687803098i/61771675.jpg",
        price: 26.50,
        category: "fiction",
        rating: 4.5,
        reviews: 1800,
        publishDate: "2023-03-14",
        inStock: true,
        stockQuantity: 62,
    },
    {
        id: 4,
        title: "It Starts with Us",
        author: "Colleen Hoover",
        description:
            "Lily and Atlas's story picks up where the poignant #1 bestseller It Ends with Us left off.",
        coverImage: "https://m.media-amazon.com/images/I/71PNGYHykrL._SL1200_.jpg",
        price: 25.00,
        category: "romance",
        rating: 4.6,
        reviews: 2300,
        publishDate: "2022-10-18",
        inStock: true,
        stockQuantity: 80,
    },
    {
        id: 5,
        title: "The Heaven & Earth Grocery Store",
        author: "James McBride",
        description:
            "A small-town mystery unearths the secrets and lies at the heart of a close-knit community.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685350945i/65678550.jpg",
        price: 28.00,
        category: "mystery",
        rating: 4.4,
        reviews: 1500,
        publishDate: "2023-08-08",
        inStock: true,
        stockQuantity: 48,
    },
    {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        description:
            "An easy & proven way to build good habits & break bad ones. Tiny Changes, Remarkable Results.",
        coverImage: "https://m.media-amazon.com/images/I/81wgcld4wxL._SL1500_.jpg",
        price: 27.00,
        category: "non-fiction",
        rating: 4.8,
        reviews: 3500,
        publishDate: "2018-10-16",
        inStock: true,
        stockQuantity: 90,
    },
    {
        id: 7,
        title: "The Covenant of Water",
        author: "Abraham Verghese",
        description:
            "A sweeping saga of love, loss, and the secrets that bind families together across generations in India.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687600746i/180357146.jpg",
        price: 30.00,
        category: "fiction",
        rating: 4.7,
        reviews: 1900,
        publishDate: "2023-05-02",
        inStock: true,
        stockQuantity: 58,
    },
    {
        id: 8,
        title: "King: A Life",
        author: "Jonathan Eig",
        description:
            "The definitive biography of Martin Luther King Jr., based on extensive new research.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1710155592i/62039291.jpg",
        price: 35.00,
        category: "biography",
        rating: 4.9,
        reviews: 1200,
        publishDate: "2023-05-16",
        inStock: true,
        stockQuantity: 45,
    },
    {
        id: 9,
        title: "Lessons in Chemistry",
        author: "Bonnie Garmus",
        description:
            "A witty, smart, and fiercely feminist novel about a brilliant chemist in the 1960s.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1714630953i/206305528.jpg",
        price: 24.00,
        category: "fiction",
        rating: 4.6,
        reviews: 2800,
        publishDate: "2022-04-05",
        inStock: true,
        stockQuantity: 75,
    },
    {
        id: 10,
        title: "Sunrise on the Reaping",
        author: "Suzanne Collins",
        description: "The highly anticipated prequel to The Hunger Games.",
        coverImage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1729085500i/214331246.jpg",
        price: 30.00,
        category: "young adult",
        rating: 4.7,
        reviews: 1900,
        publishDate: "2025-07-23",
        inStock: false,
        stockQuantity: 0,
    },
];

// Current filter and view state
const currentFilters = {
    category: "all",
    price: "all",
    sort: "featured",
    search: ""
};
let currentView = "grid";

// Shopping cart and bookmarks
let cart = [];
let bookmarks = [];

// Load cart and bookmarks from localStorage if available
function loadSavedData() {
    const savedCart = localStorage.getItem('bookstore-cart');
    const savedBookmarks = localStorage.getItem('bookstore-bookmarks');

    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }

    if (savedBookmarks) {
        bookmarks = JSON.parse(savedBookmarks);
        updateBookmarkCount();
    }
}

// Save cart and bookmarks to localStorage
function saveData() {
    localStorage.setItem('bookstore-cart', JSON.stringify(cart));
    localStorage.setItem('bookstore-bookmarks', JSON.stringify(bookmarks));
}

// Update cart count badge
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (totalItems > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

// Update bookmark count badge
function updateBookmarkCount() {
    const bookmarkCount = document.getElementById('bookmark-count');
    bookmarkCount.textContent = bookmarks.length;

    if (bookmarks.length > 0) {
        bookmarkCount.style.display = 'flex';
    } else {
        bookmarkCount.style.display = 'none';
    }
}

// Show notification
function showNotification(message, isSuccess = true) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    const notificationIcon = document.querySelector('.notification-icon');

    notification.style.backgroundColor = isSuccess ? '#2ecc71' : '#e74c3c';
    notificationIcon.className = 'notification-icon fas ' + (isSuccess ? 'fa-check-circle' : 'fa-exclamation-circle');
    notificationMessage.textContent = message;

    notification.classList.add('active');

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('active');
    }, 3000);
}

// Add item to cart
function addToCart(bookId, quantity = 1) {
    const book = books.find(b => b.id === bookId);

    if (!book) return;

    const existingItem = cart.find(item => item.id === bookId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            coverImage: book.coverImage,
            quantity: quantity
        });
    }

    updateCartCount();
    saveData();
    renderCart();
    showNotification(`"${book.title}" added to cart`);
}

// Remove item from cart
function removeFromCart(bookId) {
    const bookIndex = cart.findIndex(item => item.id === bookId);

    if (bookIndex !== -1) {
        const bookTitle = cart[bookIndex].title;
        cart.splice(bookIndex, 1);
        updateCartCount();
        saveData();
        renderCart();
        showNotification(`"${bookTitle}" removed from cart`);
    }
}

// Update cart item quantity
function updateCartItemQuantity(bookId, quantity) {
    const item = cart.find(item => item.id === bookId);

    if (item) {
        if (quantity <= 0) {
            removeFromCart(bookId);
        } else {
            item.quantity = quantity;
            updateCartCount();
            saveData();
            renderCart();
        }
    }
}

// Toggle bookmark
function toggleBookmark(bookId) {
    const book = books.find(b => b.id === bookId);

    if (!book) return;

    const bookmarkIndex = bookmarks.findIndex(item => item.id === bookId);

    if (bookmarkIndex !== -1) {
        // Remove bookmark
        const bookTitle = bookmarks[bookmarkIndex].title;
        bookmarks.splice(bookmarkIndex, 1);
        showNotification(`"${bookTitle}" removed from bookmarks`);
    } else {
        // Add bookmark
        bookmarks.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            coverImage: book.coverImage
        });
        showNotification(`"${book.title}" added to bookmarks`);
    }

    updateBookmarkCount();
    saveData();
    renderBookmarks();
}

// Check if a book is bookmarked
function isBookmarked(bookId) {
    return bookmarks.some(item => item.id === bookId);
}

// Render cart items
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotalAmount = document.getElementById('cart-total-amount');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-message">Your cart is empty</div>';
        cartTotalAmount.textContent = '$0.00';
        return;
    }

    let total = 0;
    let cartHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartHTML += `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.coverImage}" alt="${item.title}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.title}</h3>
                <p class="cart-item-author">${item.author}</p>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                    <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                </div>
                <button class="cart-item-remove" data-id="${item.id}">Remove</button>
            </div>
        </div>
        `;
    });

    cartItems.innerHTML = cartHTML;
    cartTotalAmount.textContent = `$${total.toFixed(2)}`;

    // Add event listeners to cart item controls
    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const item = cart.find(item => item.id === id);
            if (item && item.quantity > 1) {
                updateCartItemQuantity(id, item.quantity - 1);
            }
        });
    });

    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const item = cart.find(item => item.id === id);
            if (item) {
                updateCartItemQuantity(id, item.quantity + 1);
            }
        });
    });

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', () => {
            const id = parseInt(input.getAttribute('data-id'));
            const quantity = parseInt(input.value);
            if (!isNaN(quantity) && quantity > 0) {
                updateCartItemQuantity(id, quantity);
            } else {
                input.value = 1;
                updateCartItemQuantity(id, 1);
            }
        });
    });

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

// Render bookmarked items
function renderBookmarks() {
    const bookmarkItems = document.getElementById('bookmark-items');

    if (bookmarks.length === 0) {
        bookmarkItems.innerHTML = '<div class="empty-message">You haven\'t bookmarked any books yet</div>';
        return;
    }

    let bookmarksHTML = '';

    bookmarks.forEach(item => {
        bookmarksHTML += `
        <div class="bookmark-item" data-id="${item.id}">
            <div class="bookmark-item-image">
                <img src="${item.coverImage}" alt="${item.title}">
            </div>
            <div class="bookmark-item-details">
                <h3 class="bookmark-item-title">${item.title}</h3>
                <p class="bookmark-item-author">${item.author}</p>
                <p class="bookmark-item-price">$${item.price.toFixed(2)}</p>
                <button class="bookmark-item-add-to-cart" data-id="${item.id}">Add to Cart</button>
                <button class="bookmark-item-remove" data-id="${item.id}">Remove Bookmark</button>
            </div>
        </div>
        `;
    });

    bookmarkItems.innerHTML = bookmarksHTML;

    // Add event listeners to bookmark item controls
    document.querySelectorAll('.bookmark-item-add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            addToCart(id);
        });
    });

    document.querySelectorAll('.bookmark-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            toggleBookmark(id);
        });
    });
}

// ---------- DOM Content Loaded ----------
document.addEventListener("DOMContentLoaded", () => {
    // Load saved cart and bookmarks
    loadSavedData();

    // --- Search Bar Functionality ---
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const searchSuggestions = document.getElementById("search-suggestions");

    // Enhanced search functionality
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();

        if (query !== "") {
            // Search by title or author
            const matches = books.filter(book =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
            );

            if (matches.length) {
                searchSuggestions.innerHTML = matches
                    .map(
                        book =>
                            `<div class="suggestion-item" data-id="${book.id}">
                                <img src="${book.coverImage}" alt="${book.title}">
                                <div>
                                    <div>${book.title}</div>
                                    <small>${book.author}</small>
                                </div>
                            </div>`
                    )
                    .join("");
                searchSuggestions.classList.add("active");
            } else {
                searchSuggestions.innerHTML =
                    '<div class="suggestion-item">No matches found</div>';
                searchSuggestions.classList.add("active");
            }
        } else {
            searchSuggestions.innerHTML = "";
            searchSuggestions.classList.remove("active");
            currentFilters.search = "";
            filterAndRenderBooks();
        }
    });

    // Search button click
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query !== "") {
            currentFilters.search = query;
            filterAndRenderBooks();
            searchSuggestions.classList.remove("active");
        }
    });

    // Search on Enter key
    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const query = searchInput.value.trim().toLowerCase();
            if (query !== "") {
                currentFilters.search = query;
                filterAndRenderBooks();
                searchSuggestions.classList.remove("active");
            }
        }
    });

    // Clicking a suggestion fills the search input and performs search
    searchSuggestions.addEventListener("click", (e) => {
        const item = e.target.closest(".suggestion-item");
        if (item) {
            const bookId = parseInt(item.getAttribute("data-id"));
            const book = books.find(b => b.id === bookId);

            if (book) {
                searchInput.value = book.title;
                currentFilters.search = book.title.toLowerCase();
                filterAndRenderBooks();
                searchSuggestions.classList.remove("active");
            }
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener("click", (e) => {
        if (
            !searchInput.contains(e.target) &&
            !searchSuggestions.contains(e.target) &&
            !searchBtn.contains(e.target)
        ) {
            searchSuggestions.classList.remove("active");
        }
    });

    // --- Dropdown Toggle on Click ---
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const btn = dropdown.querySelector(".dropdown-btn");
        const content = dropdown.querySelector(".dropdown-content");
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });
    // Clicking outside closes any open dropdowns
    document.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-content").forEach(content => {
            content.style.display = "none";
        });
    });

    // --- Filter Dropdowns ---
    document.querySelectorAll("#category-dropdown a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            currentFilters.category = link.getAttribute("data-category");
            updateActiveClass("#category-dropdown a", currentFilters.category, "data-category");
            filterAndRenderBooks();
        });
    });
    document.querySelectorAll("#price-dropdown a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            currentFilters.price = link.getAttribute("data-price");
            updateActiveClass("#price-dropdown a", currentFilters.price, "data-price");
            filterAndRenderBooks();
        });
    });
    document.querySelectorAll("#sort-dropdown a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            currentFilters.sort = link.getAttribute("data-sort");
            updateActiveClass("#sort-dropdown a", currentFilters.sort, "data-sort");
            filterAndRenderBooks();
        });
    });

    // --- View Controls ---
    document.getElementById("grid-view-btn").addEventListener("click", () => {
        currentView = "grid";
        document.getElementById("grid-view-btn").classList.add("active");
        document.getElementById("list-view-btn").classList.remove("active");
        filterAndRenderBooks();
    });
    document.getElementById("list-view-btn").addEventListener("click", () => {
        currentView = "list";
        document.getElementById("list-view-btn").classList.add("active");
        document.getElementById("grid-view-btn").classList.remove("active");
        filterAndRenderBooks();
    });

    // --- Cart and Bookmark Overlays ---
    const cartBtn = document.getElementById("cart-btn");
    const bookmarkBtn = document.getElementById("bookmark-btn");
    const cartOverlay = document.getElementById("cart-overlay");
    const bookmarksOverlay = document.getElementById("bookmarks-overlay");
    const closeButtons = document.querySelectorAll(".close-overlay");

    // Open cart overlay
    cartBtn.addEventListener("click", () => {
        renderCart();
        cartOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    // Open bookmarks overlay
    bookmarkBtn.addEventListener("click", () => {
        renderBookmarks();
        bookmarksOverlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    // Close overlays
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            cartOverlay.classList.remove("active");
            bookmarksOverlay.classList.remove("active");
            document.body.style.overflow = ""; // Restore scrolling
        });
    });

    // Close overlays when clicking outside content
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("overlay")) {
            cartOverlay.classList.remove("active");
            bookmarksOverlay.classList.remove("active");
            document.body.style.overflow = ""; // Restore scrolling
        }
    });

    // Checkout button
    document.getElementById("checkout-btn").addEventListener("click", () => {
        if (cart.length > 0) {
            showNotification("Checkout functionality would go here!", true);
            // In a real application, this would redirect to a checkout page
        } else {
            showNotification("Your cart is empty", false);
        }
    });

    // Initial render
    filterAndRenderBooks();
});

// Helper: Update active class for filter links/tabs
function updateActiveClass(selector, value, attribute) {
    document.querySelectorAll(selector).forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute(attribute) === value) {
            link.classList.add("active");
        }
    });
}

// --- Filter and Render Books ---
function filterAndRenderBooks() {
    // Only include books with non-empty coverImage URL
    let filteredBooks = books.filter(book => book.coverImage && book.coverImage.trim() !== "");

    // Search filter
    if (currentFilters.search !== "") {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(currentFilters.search) ||
            book.author.toLowerCase().includes(currentFilters.search) ||
            book.description.toLowerCase().includes(currentFilters.search)
        );
    }

    // Category filter
    if (currentFilters.category !== "all") {
        filteredBooks = filteredBooks.filter(book => book.category === currentFilters.category);
    }

    // Price filter
    if (currentFilters.price !== "all") {
        filteredBooks = filteredBooks.filter(book => {
            if (currentFilters.price === "under10") return book.price < 10;
            if (currentFilters.price === "10-20") return book.price >= 10 && book.price <= 20;
            if (currentFilters.price === "20-30") return book.price > 20 && book.price <= 30;
            if (currentFilters.price === "over30") return book.price > 30;
        });
    }
    // Sorting
    if (currentFilters.sort === "price-asc") {
        filteredBooks.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sort === "price-desc") {
        filteredBooks.sort((a, b) => b.price - a.price);
    } else if (currentFilters.sort === "title-asc") {
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentFilters.sort === "newest") {
        filteredBooks.sort((a, b) => b.publishDate.localeCompare(a.publishDate));
    } else if (currentFilters.sort === "bestselling") {
        filteredBooks.sort((a, b) => b.reviews - a.reviews);
    } else if (currentFilters.sort === "rating") {
        filteredBooks.sort((a, b) => b.rating - a.rating);
    }
    // Update results count
    document.getElementById("results-count").innerText = `Showing ${filteredBooks.length} book(s)`;

    if (currentView === "grid") {
        renderBooksGrid(filteredBooks);
    } else {
        renderBooksList(filteredBooks);
    }
}

// --- Render Books in Grid View ---
function renderBooksGrid(bookArray) {
    const container = document.getElementById("books-container");
    container.className = "books-grid";
    container.innerHTML = "";
    bookArray.forEach(book => {
        const isBookmarkedClass = isBookmarked(book.id) ? "fas" : "far";
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
        <div class="book-cover">
          <img src="${book.coverImage}" alt="${book.title}">
        </div>
        <div class="book-info">
          <div class="book-details">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">${book.author}</p>
            <p class="book-description">${book.description}</p>
          </div>
          <div class="card-footer">
            <div class="book-price">
              <span>$${book.price.toFixed(2)}</span>
            </div>
            <div class="grid-actions">
              <button class="action-btn add-to-cart-btn" data-id="${book.id}"><i class="fas fa-shopping-cart"></i></button>
              <button class="action-btn toggle-bookmark-btn" data-id="${book.id}"><i class="${isBookmarkedClass} fa-bookmark"></i></button>
            </div>
          </div>
        </div>`;
        container.appendChild(card);
    });

    // Add event listeners to grid view buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            addToCart(id);
        });
    });

    document.querySelectorAll('.toggle-bookmark-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            toggleBookmark(id);
            // Update bookmark icon
            const icon = btn.querySelector('i');
            if (isBookmarked(id)) {
                icon.className = "fas fa-bookmark";
            } else {
                icon.className = "far fa-bookmark";
            }
        });
    });
}

// --- Render Books in List View ---
function renderBooksList(bookArray) {
    const container = document.getElementById("books-container");
    container.className = "books-list";
    container.innerHTML = "";
    bookArray.forEach(book => {
        const isBookmarkedClass = isBookmarked(book.id) ? "fas" : "far";
        const listItem = document.createElement("div");
        listItem.classList.add("book-list-item");
        listItem.innerHTML = `
        <div class="list-cover">
          <img src="${book.coverImage}" alt="${book.title}">
        </div>
        <div class="list-info">
          <div>
            <h3 class="list-title">${book.title}</h3>
            <p class="list-author">${book.author}</p>
            <p class="list-description">${book.description}</p>
          </div>
          <div class="list-footer">
            <span>$${book.price.toFixed(2)}</span>
            <div class="list-actions">
              <button class="action-btn add-to-cart-btn" data-id="${book.id}"><i class="fas fa-shopping-cart"></i></button>
              <button class="action-btn toggle-bookmark-btn" data-id="${book.id}"><i class="${isBookmarkedClass} fa-bookmark"></i></button>
            </div>
          </div>
        </div>`;
        container.appendChild(listItem);
    });

    // Add event listeners to list view buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            addToCart(id);
        });
    });

    document.querySelectorAll('.toggle-bookmark-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            toggleBookmark(id);
            // Update bookmark icon
            const icon = btn.querySelector('i');
            if (isBookmarked(id)) {
                icon.className = "fas fa-bookmark";
            } else {
                icon.className = "far fa-bookmark";
            }
        });
    });
}