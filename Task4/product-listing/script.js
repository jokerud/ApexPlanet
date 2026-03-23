const products = [
    {
      id: 1,
      name: "Smartphone",
      category: "electronics",
      price: 14999,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 2,
      name: "T-Shirt",
      category: "clothing",
      price: 499,
      rating: 4.1,
      img: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Laptop",
      category: "electronics",
      price: 54999,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Novel",
      category: "books",
      price: 299,
      rating: 4.3,
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
    },
    {
      id: 5,
      name: "Jeans",
      category: "clothing",
      price: 1299,
      rating: 4.0,
      img: "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Tablet",
      category: "electronics",
      price: 18999,
      rating: 4.4,
      img: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  
  
  function displayProducts(filteredProducts) {
    productGrid.innerHTML = "";
    filteredProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
        <p>Rating: ⭐${product.rating}</p>
      `;
      productGrid.appendChild(card);
    });
  }
  
  
  function applyFiltersAndSort() {
    let filtered = [...products];
  
    // Filter by category
    const category = filterCategory.value;
    if (category !== "all") {
      filtered = filtered.filter(p => p.category === category);
    }
  
    // Sort
    const sort = sortOption.value;
    if (sort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "rating-desc") {
      filtered.sort((a, b) => b.rating - a.rating);
    }
  
    displayProducts(filtered);
  }
  
  filterCategory.addEventListener("change", applyFiltersAndSort);
  sortOption.addEventListener("change", applyFiltersAndSort);
  
  // Initial render
  displayProducts(products);
  