const SpotLight = () => {
  return (
    <section className="bg-[#d3bb92] w-[1920px] h-[700px] py-8 px-4 overflow-hidden flex flex-col items-center">
      {/* Header Content - Removed margin-bottom */}
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white">
          Optimus AI Spotlight
        </h1>
        <h3 className="text-white text-xl mt-4">Meet Optimus AI: Your Autonomous Support Assistant</h3>
      </div>

      {/* Gradient Rectangle immediately follows header */}
      <div className="flex items-center justify-center w-full mt-6">
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: '1220px',
            height: '448px',
            padding: '86px 300px',
            borderRadius: '56px',
            background: 'linear-gradient(95.27deg, #785CF5 1.84%, #7290F4 52.09%, #6CBCF4 102.33%)'
          }}
        >
          {/* Content inside the gradient rectangle */}
        </div>
      </div>
    </section>
  )
}

export default SpotLight