import LeftSidebar from "@/components/LeftSidebar"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-sm w-full h-full flex relative">
        <LeftSidebar />
        <main>home timeline</main>
        <div>right section</div>
      </div>
    </div>
  )
}

export default Home