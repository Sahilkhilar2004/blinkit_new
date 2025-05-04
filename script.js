let hoverReadEnabled = false;
let currentUtterance = null;
let deliveryTimer;

// Mock serviceable pincodes (replace with real API call)
const SERVICEABLE_PINCODES = {
    '751024': { name: 'Bhubaneswar', time: 14 },
    '751030': { name: 'Patia', time: 18 },
    '560001': { name: 'Bangalore', time: 45 },
    '400001': { name: 'Mumbai', time: 55 }
  };
  
  // Initialize from localStorage
  function loadSavedLocation() {
    const saved = localStorage.getItem('deliveryLocation');
    if (saved) {
      const location = JSON.parse(saved);
      updateLocationDisplay(location);
      startDeliveryTimer(location.time);
    }
  }
  
  function updateLocationDisplay(location) {
    document.getElementById('locationText').textContent = 
      `${location.name} (${location.pincode})`;
    document.getElementById('deliveryMinutes').textContent = location.time;
  }
  
  function showLocationModal() {
    document.getElementById('locationModal').style.display = 'block';
  }
  
  function hideLocationModal() {
    document.getElementById('locationModal').style.display = 'none';
  }
  
  function checkLocation() {
    const pincode = document.getElementById('pincodeInput').value;
    const messageElement = document.getElementById('locationMessage');
    
    if (!/^\d{6}$/.test(pincode)) {
      messageElement.innerHTML = '<span style="color: #d32f2f">Please enter a valid 6-digit PIN code</span>';
      return;
    }
  
    const location = SERVICEABLE_PINCODES[pincode];
    
    if (location) {
      messageElement.innerHTML = '<span style="color: #2e7d32">✓ Delivery available!</span>';
      setTimeout(() => {
        location.pincode = pincode;
        localStorage.setItem('deliveryLocation', JSON.stringify(location));
        updateLocationDisplay(location);
        startDeliveryTimer(location.time);
        hideLocationModal();
      }, 1000);
    } else {
      messageElement.innerHTML = '<span style="color: #d32f2f">❌ Delivery not available in this area</span>';
    }
  }
  
  function startDeliveryTimer(initialMinutes) {
    clearInterval(deliveryTimer);
    let minutes = initialMinutes;
    const timerElement = document.getElementById('deliveryMinutes');
    
    deliveryTimer = setInterval(() => {
      minutes = Math.max(0, minutes - 1);
      timerElement.textContent = minutes;
      
      if (minutes <= 5) {
        timerElement.style.color = '#d32f2f';
      } else {
        timerElement.style.color = '#2e7d32';
      }
    }, 60000); // Update every minute
  }
  
  // Event Listeners
  document.getElementById('locationButton').addEventListener('click', showLocationModal);
  document.querySelectorAll('.location-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const pincode = tag.dataset.pincode;
      document.getElementById('pincodeInput').value = pincode;
      checkLocation();
    });
  });
  
  // Close modal when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.location-modal') && 
        !e.target.closest('#locationButton')) {
      hideLocationModal();
    }
  });
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', loadSavedLocation);
// ========== PRODUCT DATA ==========
const productSections = [
    {
      title: "Dairy, Bread & Eggs",
      products: [
        {
          name: "Omfed Premium Cow Fresh Milk",
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ac555fc2-f9c2-42ce-b1cb-40fffd53bd48.jpg?ts=1737458653",
          weight: "500 ml",
          price: "₹26"
        },
        {
          name: "Omfed Toned Milk Curd",
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e00ac7ba-bcf4-48fa-819f-ee8ec4cceb71.jpg?ts=1737462371",
          weight: "500 gm",
          price: "₹55"
        },
        {
          name: "Omfed Plain Curdd",
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/abd5aa6a-7cad-4d94-980e-cbdd0957189b.jpg",
          weight: "400 gm",
          price: "₹55"
        },
        {
          name: "OVO Farm On Day White Eggs",
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/f1373577-2602-45dc-b99e-474b8acd7925.jpg?ts=1723099992",
          weight: "6 pieces",
          price: "₹44"
        },
        {
            name: "Moreish Sandwich Brown Bread",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/480254b5-20ce-4c7a-a7ec-c2b5f68821a9.jpg?ts=1727549193",
            weight: "450 gm",
            price: "₹45"
          },
          {
            name: "Omfed Plain Curdd",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/abd5aa6a-7cad-4d94-980e-cbdd0957189b.jpg",
            weight: "400 gm",
            price: "₹55"
          },
      ]
    },
    {
      title: "Rolling paper & tobacco",
      products: [
        {
          name: "Ultimate Rolling Paper with Filter Tips",
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/512860a.jpg?ts=1690832312",
          weight: "1 pack",
          price: "₹80"
        },
        {
          name: "Perfect Rolled Cones (Natural) - Bongchie",
          image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/661d1bd8-2374-47ad-b231-af4842bd5d50.jpg?ts=1740560975",
          weight: "3 pCK",
          price: "₹45"
        },
        {
            name: "Stash Pro Bio-Degradeble Crusher by",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/537048a.jpg?ts=1699862659",
            weight: "1 piece",
            price: "₹300"
          },
          {
            name: "White Ripper Tipper Rolling Paper with",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/506376a.jpg?ts=1698309252",
            weight: "1 pack",
            price: "₹100"
          },
          {
            name: "Pre-rolled Rose Blunt Rolling Paper by Bongchie",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e10f5554-ab7c-4467-bc2b-bc322174745e.jpg",
            weight: "1 unit",
            price: "₹120"
          },
          {
            name: "Glass Filter Tip Reusable Smoking Filter with perfect roll",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/deee5ea4-214b-4d67-8dbb-46d3bacb589d.jpg?ts=1736847248",
            weight: "1 unit",
            price: "₹50"
          },
          {
            name: "Ultimate Rolling Paper with Filter Tips ",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/478728a.jpg?ts=1690814280",
            weight: "1 pack",
            price: "₹90"
          }
          
      ]
    },
    {
        title: "Snacks & Munchies",
        products: [
          {
            name: "Kettle Studio Sharp Jalapenos & Cream",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ca5df83c-027b-40c9-9605-38126d47575d.jpg?ts=1723098574",
            weight: "113 g",
            price: "₹99"
          },
          {
            name: "Kab's Jackpot Cheese Balls",
            image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c23856bf-cdf5-475d-9545-023bff8694d3.jpg?ts=1723100848",
            weight: "60 g",
            price: "₹65"
          },
          {
              name: "Moi Soi White Rice Paper",
              image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1f3a0e5b-26f8-4f7d-a0c0-e6410f763ab5.jpg?ts=1735649560",
              weight: "100 g",
              price: "₹174"
            },
            {
              name: "Cheetos Flamin Hot Crunchy Puffs",
              image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802",
              weight: "28.3 g",
              price: "₹161"
            },
            {
              name: "Kettle Studio Rock Sea Salt & English Vinegar",
              image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c4486d68-0ed2-43f0-9214-851063495eb5.jpg?ts=1723098569",
              weight: "113 g",
              price: "₹99"
            },
            {
              name: "Kettle Studio Sweet Chilli With Lime & Basil",
              image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/bebe562d-c417-465b-9b12-4d612f48d08a.jpg?ts=1723098763",
              weight: "75 g",
              price: "₹129"
            },
            {
              name: "Kab's Jackpot Fiery and Crunchy Crisps ",
              image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/eadd1b3c-b986-4276-976d-27cdfe3e558c.jpg?ts=1723101044",
              weight: "60 g",
              price: "₹65"
            }
        ]
    }
  ];

  // ========== HOVER-TO-READ FUNCTIONS ==========
function setupHoverRead() {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.removeEventListener('mouseenter', handleHoverRead);
        card.addEventListener('mouseenter', handleHoverRead);
    });
}

function handleHoverRead() {
    if (!hoverReadEnabled) return;
    
    window.speechSynthesis.cancel();
    this.classList.add('hover-reading');
    
    const name = this.querySelector('.product-title').textContent;
    const price = this.querySelector('.product-price').textContent;
    const weight = this.querySelector('.product-weight').textContent;
    
    currentUtterance = new SpeechSynthesisUtterance(
        `${name}. ${weight}. ${price}`
    );
    currentUtterance.rate = 0.9;
    currentUtterance.onend = () => {
        this.classList.remove('hover-reading');
    };
    
    window.speechSynthesis.speak(currentUtterance);
}
  
 // ========== ACCESSIBILITY FEATURES ==========
function setupAccessibility() {
    const accessibilityToggle = document.getElementById('accessibilityToggle');
    const accessibilityPanel = document.getElementById('accessibilityPanel');
    const hoverReadToggle = document.getElementById('hoverReadToggle');
    
    
    // Initialize ARIA attributes
    accessibilityToggle.setAttribute('aria-expanded', 'false');
    accessibilityToggle.setAttribute('aria-controls', 'accessibilityPanel');
    accessibilityPanel.setAttribute('aria-hidden', 'true');

    // Load saved preferences from localStorage
    function loadPreferences() {
        if (localStorage.getItem('highContrast') === 'true') {
            document.body.classList.add('high-contrast');
            document.getElementById('highContrast').checked = true;
        }
        if (localStorage.getItem('dyslexicFont') === 'true') {
            document.body.classList.add('dyslexic-font');
            document.getElementById('dyslexicFont').checked = true;
        }
        if (localStorage.getItem('biggerText') === 'true') {
            document.body.classList.add('bigger-text');
            document.getElementById('biggerText').checked = true;
        }
        if (localStorage.getItem('biggerButtons') === 'true') {
            document.body.classList.add('bigger-buttons');
            document.getElementById('biggerButtons').checked = true;
        }
        if (localStorage.getItem('hoverReadEnabled') === 'true') {
            hoverReadToggle.checked = true;
            hoverReadEnabled = true;
        }
    }

     // Hover-read toggle
     hoverReadToggle.addEventListener('change', function() {
        hoverReadEnabled = this.checked;
        localStorage.setItem('hoverReadEnabled', this.checked);
        
        if (hoverReadEnabled) {
            setupHoverRead();
        } else {
            window.speechSynthesis.cancel();
            document.querySelectorAll('.hover-reading').forEach(el => {
                el.classList.remove('hover-reading');
            });
        }
    });

    


    // Toggle panel visibility
    accessibilityToggle.addEventListener('click', () => {
        const isExpanded = accessibilityToggle.getAttribute('aria-expanded') === 'true';
        accessibilityToggle.setAttribute('aria-expanded', !isExpanded);
        accessibilityPanel.setAttribute('aria-hidden', isExpanded);
        accessibilityPanel.style.display = isExpanded ? 'none' : 'block';
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
        if (!accessibilityPanel.contains(e.target) && e.target !== accessibilityToggle) {
            accessibilityToggle.setAttribute('aria-expanded', 'false');
            accessibilityPanel.setAttribute('aria-hidden', 'true');
            accessibilityPanel.style.display = 'none';
        }
    });
    
    
    // High Contrast Mode
    document.getElementById('highContrast').addEventListener('change', function() {
        document.body.classList.toggle('high-contrast', this.checked);
        localStorage.setItem('highContrast', this.checked);
    });

    // Dyslexia Font
    document.getElementById('dyslexicFont').addEventListener('change', function() {
        document.body.classList.toggle('dyslexic-font', this.checked);
        localStorage.setItem('dyslexicFont', this.checked);
    });

    // Bigger Text
    document.getElementById('biggerText').addEventListener('change', function() {
        document.body.classList.toggle('bigger-text', this.checked);
        localStorage.setItem('biggerText', this.checked);
    });

    // Bigger Buttons
    document.getElementById('biggerButtons').addEventListener('change', function() {
        document.body.classList.toggle('bigger-buttons', this.checked);
        localStorage.setItem('biggerButtons', this.checked);
    });

    
document.getElementById('resetAllSettings').addEventListener('click', function() {
    // Reset all toggles
    document.querySelectorAll('.accessibility-option input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    
    // Reset all classes
    document.body.className = '';
    
    // Reset all variables
    hoverReadEnabled = false;
    if (currentUtterance) {
      window.speechSynthesis.cancel();
    }
    
    // Clear localStorage
    localStorage.removeItem('highContrast');
    localStorage.removeItem('dyslexicFont');
    localStorage.removeItem('biggerText');
    localStorage.removeItem('biggerButtons');
    localStorage.removeItem('hoverReadEnabled');
    
    // Reinitialize hover-read (to remove any active listeners)
    setupHoverRead();
    
    // Visual feedback
    
  });

    // Initialize
    loadPreferences();
  
}

// ========== RENDER PRODUCTS ==========
function renderProducts() {
    const container = document.querySelector('.products-section');
    
    productSections.forEach(section => {
        const productsHTML = section.products.map(product => `
            <div class="product-card" tabindex="0">
                <img src="${product.image}" class="product-image" alt="${product.name}">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-weight">${product.weight}</p>
                <p class="product-price">${product.price}</p>
                <button class="add-to-cart">Add</button>
            </div>
        `).join('');

        container.insertAdjacentHTML('beforeend', `
            <div class="products-section">
                <h2 class="section-title">${section.title}</h2>
                <div class="products-grid">${productsHTML}</div>
            </div>
        `);
    });

    // Initialize hover-read if enabled
    if (hoverReadEnabled) {
        setupHoverRead();
    }
}


  // ========== INITIALIZE EVERYTHING ==========
  document.addEventListener('DOMContentLoaded', function() {
    setupAccessibility();
    renderProducts();
    
    // Add click event for all "Add to Cart" buttons
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('add-to-cart')) {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('.product-title').textContent;
        alert(`${productName} added to cart!`);
      }
    });
  });