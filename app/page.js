export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header Section - 10% height */}
      <header
        style={{
          height: '10%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          color: '#4d0000',
          padding: '0 20px',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '600', width: '50%' }}>
          <b>S</b>upport <b>A</b>ssociation for <b>P</b>romoting <b>N</b>ationwide <b>E</b>ducation
        </h1>
      </header>

      {/* Image Section - 90% height */}
      <section
        style={{
          height: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src="/sapne-image.jpg"
          alt="SAPNE NGO"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </section>
    </main>
  )
}
