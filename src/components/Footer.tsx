import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t-4 border-white bg-[#242526] text-white py-10 mt-28">
      <div className="container flex justify-between">
        <div className="left">
          <p className="logo">
            <a className="flex items-center gap-3" href="/">
              <img
                className="rounded-md"
                height={50}
                width={50}
                src="https://st.truyenqqvn.com/template/frontend/images/logo-icon.png"
                alt=""
              />
              <div className="bg-gradient-to-r from-[#00d4ff] to-[#79095c] bg-clip-text ">
                <p className="text-2xl leading-[50px] font-bold text-transparent font-mono font-pacifico">
                  Hoang em
                </p>
              </div>
            </a>
          </p>
          <p className="text-sm text-gray-200 mt-3">
            Email: truyenqq@proton.me
          </p>
          <p className="link">
            <a href="/tin-tuc/chinh-sach-bao-mat.html">Chính Sách Bảo Mật</a>
          </p>
        </div>
        <div className="w-3/5 text-sm">
          <ul className="flex gap-2 flex-wrap">
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/">Truyện Tranh</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/">Truyện Tranh Online</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/">Truyện Tranh Mới</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/">Truyện Tranh Hay</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/">Đọc Truyện Tranh</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/the-loai/manhwa-49.html">Manhwa</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/the-loai/manhua-35.html">Manhua</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/truyen-moi-cap-nhat/trang-1.html?country=4">Manga</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/the-loai/ngon-tinh-87.html">Truyện Ngôn Tình</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/nettruyen">nettruyen</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/toptruyen">toptruyen</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/blogtruyen">blogtruyen</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/ocumeo">ocumeo</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/vcomycs">vcomycs</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/protruyen">protruyen</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/tusachxinh">tusachxinh</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/tutientruyen">tutientruyen</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/truyentranhlh">truyentranhlh</a>
            </li>
            <li className="px-2 py-1 bg-[#18191a] w-max rounded">
              <a href="/tag/teamlanhlung">teamlanhlung</a>
            </li>
          </ul>
          <p className="text-sm mt-4">
            Mọi thông tin và hình ảnh trên website đều được sưu tầm trên
            Internet. Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông
            tin nào trên web này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào,
            khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer