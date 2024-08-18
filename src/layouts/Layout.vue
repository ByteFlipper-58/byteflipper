<template>
  <div class="flex flex-col min-h-screen">
     <!-- Header -->
     <header class="fixed top-0 left-0 right-0 bg-neutral bg-opacity-50 backdrop-blur-md p-4 flex items-center justify-between z-50">
        <div class="flex items-center">
           <router-link to="/" class="flex items-center">
              <img src="@/assets/logos/logo.png" alt="Logo" class="logo">
              <h1 class="text-2xl lg:text-3xl font-bold mb-0 ml-4 gradient-text">ByteFlipper</h1>
           </router-link>
        </div>
        <!-- Burger Icon for Mobile -->
        <div class="lg:hidden">
           <button @click="toggleMenu" class="text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
           </button>
        </div>
        <!-- Navigation Links -->
        <nav :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="lg:flex lg:items-center lg:space-x-4">
           <router-link to="/" class="nav-button">{{ $t('menu.home') }}</router-link>
           <router-link to="/about" class="nav-button">{{ $t('menu.aboutMe') }}</router-link>
           <router-link to="/contact" class="nav-button">{{ $t('menu.contactMe') }}</router-link>
           <!--router-link to="/faq" class="nav-button">FAQ</router-link-->
        </nav>
     </header>
     <!-- Main Content -->
     <main class="flex-grow p-4 mt-20">
        <router-view></router-view>
     </main>
     <!-- Footer -->
     <footer class="bg-neutral text-sm p-4 text-center font-bold">
        <span class="footer-gradient">
        &copy; Made with ❤️ by 
        <a 
           href="https://byteflipper.web.app/" 
           target="_blank" 
           rel="noopener noreferrer">
        ByteFlipper
        </a>
        </span>
     </footer>
  </div>
</template>
<script>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const handleCardClick = (routeName) => {
    router.push({ name: routeName });
  };
  
  export default {
    name: 'Layout',
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        if (this.isMenuOpen) {
          this.isMenuOpen = false;
        }
      },
      handleClickOutside(event) {
        const menu = this.$el.querySelector('nav');
        if (menu && !menu.contains(event.target) && !this.$el.querySelector('button').contains(event.target)) {
          this.closeMenu();
        }
      },
      handleScroll() {
        if (this.isMenuOpen) {
          this.closeMenu();
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>
<style scoped>
  header {
  backdrop-filter: blur(12px);
  background-color: rgba(75, 65, 65, 0.2);
  }
  .logo {
  height: 40px;
  width: auto;
  }
  .gradient-text {
  display: inline-block;
  background: linear-gradient(90deg, #fd6900, #f4097b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-weight: bold;
  }
  .footer-gradient {
  background: linear-gradient(90deg, #fd6900, #f4097b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  }
  .nav-button {
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
  color: white;
  transition: color 0.2s;
  display: block;
  padding: 8px 0;
  }
  .nav-button:hover {
  color: #fd6900;
  }
  /* Mobile Navigation */
  @media (max-width: 1023px) {
  nav {
  backdrop-filter: blur(12px);
  background-color: #121C22;
  position: fixed; /* Changed to fixed for proper overlay */
  top: 70px; /* Adjusted to match header height */
  left: 0;
  right: 0;
  flex-direction: column;
  padding: 10px;
  z-index: 40;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  }
  nav.block {
  transform: translateY(0);
  }
  nav.hidden {
  transform: translateY(-100%);
  }
  }
  @media (min-width: 1024px) {
  nav {
  display: flex !important;
  position: static;
  transform: none;
  }
  }
</style>