import Navbar from "@/components/Navbar";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import { CartProvider } from "@/Context/CartContext";


function App() {
  return (
    <CartProvider>
      <Navbar />
      <main className="container mx-auto px-8 lg:px-24 py-12">
        <div className="grid md:grid-cols-2 gap-20">
          <ProductGallery />
          <ProductInfo />
        </div>
      </main>
    </CartProvider>
  );
}

export default App;