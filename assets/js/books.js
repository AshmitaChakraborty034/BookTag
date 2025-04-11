const books = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        description:
            "Between life and death there is a library, and within that library, the shelves go on forever.",
        coverImage:
            "../images/books/book1.png",
        price: 24.99,
        category: "fiction",
        rating: 4.5,
        reviews: 1243,
        publishDate: "2020-08-13",
        inStock: true,
        stockQuantity: 42
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "James Clear",
        description:
            "A proven framework to build good habits and break bad ones.",
        coverImage:
            "../images/books/book2.png",
        price: 27.0,
        category: "non-fiction",
        rating: 4.8,
        reviews: 2876,
        publishDate: "2018-10-16",
        inStock: true,
        stockQuantity: 78
    },
    {
        id: 3,
        title: "Project Hail Mary",
        author: "Andy Weir",
        description:
            "Humanity’s last hope rests on a daring mission to save Earth.",
        coverImage:
            "../images/books/book3.png",
        price: 28.99,
        category: "sci-fi",
        rating: 4.7,
        reviews: 987,
        publishDate: "2021-05-04",
        inStock: true,
        stockQuantity: 35
    },
    {
        id: 4,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        description:
            "A reimagining of the Trojan War from the perspective of a legendary hero.",
        coverImage:
            "../images/books/book4.png",
        price: 16.99,
        category: "fiction",
        rating: 4.6,
        reviews: 1532,
        publishDate: "2012-03-06",
        inStock: true,
        stockQuantity: 23
    },
    {
        id: 5,
        title: "Educated",
        author: "Tara Westover",
        description:
            "A memoir about a young woman who escapes a strict family to pursue knowledge.",
        coverImage:
            "../images/books/book5.png",
        price: 18.99,
        category: "biography",
        rating: 4.7,
        reviews: 2134,
        publishDate: "2018-02-20",
        inStock: true,
        stockQuantity: 56
    },
    {
        id: 6,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        description:
            "A psychological thriller in which a woman stops speaking after a tragic act.",
        coverImage:
            "../images/books/book6.png",
        price: 26.99,
        category: "mystery",
        rating: 4.5,
        reviews: 1876,
        publishDate: "2019-02-05",
        inStock: true,
        stockQuantity: 42
    },
    {
        id: 7,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        description:
            "A mystery and coming-of-age novel set in the marshlands of North Carolina.",
        coverImage:
            "../images/books/book7.png",
        price: 22.0,
        category: "fiction",
        rating: 4.8,
        reviews: 2543,
        publishDate: "2018-08-14",
        inStock: true,
        stockQuantity: 67
    },
    {
        id: 8,
        title: "The Four Winds",
        author: "Kristin Hannah",
        description:
            "An epic of love and heroism set during the hardship of the Great Depression.",
        coverImage:
            "../images/books/book8.png",
        price: 28.99,
        category: "fiction",
        rating: 4.5,
        reviews: 1243,
        publishDate: "2021-02-02",
        inStock: true,
        stockQuantity: 38
    },
    {
        id: 9,
        title: "The Vanishing Half",
        author: "Brit Bennett",
        description:
            "Twin sisters lead different lives after escaping their small hometown.",
        coverImage:
            "../images/books/book9.png",
        price: 27.0,
        category: "fiction",
        rating: 4.6,
        reviews: 1876,
        publishDate: "2020-06-02",
        inStock: true,
        stockQuantity: 45
    },
    {
        id: 10,
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro",
        description:
            "A futuristic story that examines the nature of love and consciousness.",
        coverImage:
            "../images/books/book11.png",
        price: 28.0,
        category: "sci-fi",
        rating: 4.3,
        reviews: 987,
        publishDate: "2021-03-02",
        inStock: true,
        stockQuantity: 32
    }
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


