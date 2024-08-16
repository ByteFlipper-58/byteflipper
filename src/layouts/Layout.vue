<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 bg-neutral bg-opacity-50 backdrop-blur-md p-4 flex items-center z-50">
      <img src="@/assets/logos/logo.png" alt="Logo" class="logo">
      <h1 class="text-2xl lg:text-3xl font-bold mb-0 ml-4 gradient-text">ByteFlipper</h1>
    </header>

    <!-- Main Content -->
    <main class="flex-grow p-4 mt-20"> <!-- Added margin-top to offset the header height -->
      <router-view></router-view> <!-- This will render the current route's component -->
    </main>

    <!-- Footer -->
    <footer class="bg-neutral text-sm p-4 text-center font-bold">
      <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        &copy; 2024 MC Tools by 
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
export default {
  name: 'Layout',
  computed: {}
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
</style>