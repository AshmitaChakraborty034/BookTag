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
    sort: "featured"
};
let currentView = "grid";

// ---------- DOM Content Loaded ----------
document.addEventListener("DOMContentLoaded", () => {
    // --- Search Bar Functionality ---
    const searchInput = document.getElementById("search-input");
    const searchSuggestions = document.getElementById("search-suggestions");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query !== "") {
            const matches = books.filter(book =>
                book.title.toLowerCase().includes(query)
            );
            if (matches.length) {
                searchSuggestions.innerHTML = matches
                    .map(
                        book =>
                            `<div class="suggestion-item" data-id="${book.id}">
                  <img src="${book.coverImage}" alt="${book.title}">
                  ${book.title}
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
        }
    });
    // Clicking a suggestion fills the search input
    searchSuggestions.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("suggestion-item") ||
            e.target.parentElement.classList.contains("suggestion-item")
        ) {
            const item = e.target.closest(".suggestion-item");
            searchInput.value = item.innerText.trim();
            searchSuggestions.innerHTML = "";
            searchSuggestions.classList.remove("active");
        }
    });
    // Hide suggestions when clicking outside
    document.addEventListener("click", (e) => {
        if (
            !searchInput.contains(e.target) &&
            !searchSuggestions.contains(e.target)
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
              <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
              <button class="action-btn"><i class="fas fa-bookmark"></i></button>
            </div>
          </div>
        </div>`;
        container.appendChild(card);
    });
}

// --- Render Books in List View ---
function renderBooksList(bookArray) {
    const container = document.getElementById("books-container");
    container.className = "books-list";
    container.innerHTML = "";
    bookArray.forEach(book => {
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
              <button class="action-btn"><i class="fas fa-shopping-cart"></i></button>
              <button class="action-btn"><i class="fas fa-bookmark"></i></button>
            </div>
          </div>
        </div>`;
        container.appendChild(listItem);
    });
}


