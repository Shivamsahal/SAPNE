export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header Section - 10% height */}
      <header
        style={{
          height: '10%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1e40af',
          color: '#ffffff',
          padding: '0 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '600' }}>
          Support Association for Promoting Nationwide Education
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
          backgroundColor: '#f5f5f5',
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
