import { Cart, CategoryMenu, FoodItem, Navbar } from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </>
  );
}
