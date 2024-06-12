/* eslint-disable @next/next/no-img-element */
interface BannerProps {
  background: string
  backgroundMobile?: string
}

const Banner: React.FC<BannerProps> = ({ background, backgroundMobile }) => {
  const alt = background.split('/').pop()?.split('.')[0]

  return (
    <div className="w-full">
      <img src={background} alt={alt} className='hidden lg:block w-full' />
      <img
        src={backgroundMobile}
        alt={alt}
        className='lg:hidden w-full max-h-64 bg-cover bg-center'
      />
    </div>
  )
}

export default Banner
