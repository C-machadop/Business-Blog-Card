function App() {

  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="w-96 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="relative">
            <img
              src="/images/hero-image-1.jpg"
              alt="Hero Image"
              className="block w-full object-cover"
            />
            <img
              src="/images/white-overlay.svg"
              alt="Wave Overlay"
              className="absolute -bottom-1 left-0 w-full"
            />
          </div>

          <div className="p-7">
            <h1 className="text-2xl font-semibold mb-2 text-customDark">
              Perfect solution for small business
            </h1>
            <p className="text-customBlueGray text-base mb-4 leading-relaxed">
              Small businesses need to generate leads to grow. You can use tools like
              Ringy.
            </p>

            <div className="border-t border-gray-200 mb-4"></div>

            <div className="flex items-center gap-3">
              <img
                src="images/avatar-image-business-card.png"
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-customDark text-base">Amy Burgess</p>
                <p className="text-customBlueGray text-base">Customer Manager, Solution Oy</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <div className="author-info">
        Coded by <a href="#">Your Name Here</a> | Challenge by
        <a href="https://www.devchallenges.io?ref=challenge" target="_blank"
        >devChallenges.io</a
        >.
      </div> */}
    </>
  )
}

export default App
