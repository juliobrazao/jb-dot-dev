import './../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-100'>
        <div className='d-flex min-vh-100 justify-content-center align-items-center'>
          {children}
        </div>
      </body>
    </html>
  )
}
