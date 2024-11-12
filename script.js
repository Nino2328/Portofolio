//fungsi dropdown
const dropdownHover = document.getElementById('dropdownHover');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownHover.addEventListener('mouseenter', () => {
    dropdownMenu.classList.add('show');
});

dropdownHover.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('show');
});


// fungsi list scroll
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');
const listboxWrapper = document.querySelector('.listbox-wrapper');

scrollLeft.addEventListener('click', () => {
    listboxWrapper.scrollBy({
        left: -320,
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    listboxWrapper.scrollBy({
        left: 320,
        behavior: 'smooth'
    });
});

// Pengiriman formulir kontak
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;

    // Tampilkan pesan sukses menggunakan SweetAlert2
    Swal.fire({
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonColor: '#7c4dff'
    }).then(() => {
        // Reset form
        contactForm.reset();
    });
});

// Verifikasi usia saat memuat halaman
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('ageVerified')) {
        Swal.fire({
            title: 'Age Verification',
            text: 'Are you 18 years or older?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7c4dff',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I am',
            cancelButtonText: 'No, I am not'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('ageVerified', 'true');
            } else {
                window.location.href = 'https://www.google.com';
            }
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Footer
// Get all the tab links
const tabLinks = document.querySelectorAll('#footer-tabs .nav-link');
// Get all the tab content divs
const tabContents = document.querySelectorAll('#footer-tabs-content .tab-pane');

// Add click event listener to each tab link
tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Remove active class from all tab links and tab contents
        tabLinks.forEach(l => l.classList.remove('show', 'active'));
        tabContents.forEach(c => c.classList.remove('show', 'active'));
        
        // Add active class to the clicked tab link and its corresponding tab content
        link.classList.add('active');
        tabContents[index].classList.add('show', 'active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const categoryItems = document.querySelectorAll('.category-item');
    const scrollContainer = document.querySelector('.scroll-container');
  
    // Function to handle category item click
    function handleCategoryClick(e) {
      e.preventDefault();
      
      // Remove active class from all items
      categoryItems.forEach(item => item.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // Animate the clicked item
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
  
      // Scroll the clicked item into view
      const containerRect = scrollContainer.getBoundingClientRect();
      const itemRect = this.getBoundingClientRect();
      const offset = itemRect.left - containerRect.left - (containerRect.width - itemRect.width) / 2;
      
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft + offset,
        behavior: 'smooth'
      });
    }
  
    // Add click event listener to each category item
    categoryItems.forEach(item => {
      item.addEventListener('click', handleCategoryClick);
    });
  
    // Horizontal scroll with mouse drag
    let isDown = false;
    let startX;
    let scrollLeft;
  
    scrollContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      scrollContainer.style.cursor = 'grabbing';
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    });
  
    scrollContainer.addEventListener('mouseleave', () => {
      isDown = false;
      scrollContainer.style.cursor = 'grab';
    });
  
    scrollContainer.addEventListener('mouseup', () => {
      isDown = false;
      scrollContainer.style.cursor = 'grab';
    });
  
    scrollContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    });
  
    console.log('Category navigation animation initialized');
  });
  
  // Simulating click events for demonstration
  setTimeout(() => {
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems[1].click();
    console.log('Clicked on:', categoryItems[1].textContent.trim());
    
    setTimeout(() => {
      categoryItems[3].click();
      console.log('Clicked on:', categoryItems[3].textContent.trim());
    }, 2000);
  }, 1000);


  