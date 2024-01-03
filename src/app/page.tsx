import LeftSidebar from "@/components/LeftSidebar"

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <main className="ml-[275px] p-6 mx-2 flex w-[600px] h-full flex-col border-l-[0.5px] border-r-[0.5px] border-grey-600">
          <h1 className="text-3xl font-bold">Home</h1>
        </main>
        <div>right section</div>
      </div>
    </div>
  )
}

export default Home