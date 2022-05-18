import logo from '../src/images/logo.png'
import './App.css';

function App() {
  return (
    <div className="App-header">
     
      <header className='App-header'>
     
        <div className='list1 h-screen bg-black w-96 text-white'>
           <div className='logo  pl-32'>
           <div className='container ml-80 text-black  text-4xl'>
        <h1>Over view</h1>
        <div className='search '>
        <input type='text' className='input bg-slate-100 text-2xl  float-right' placeholder='Search.....'/>
        </div>
        </div>

      <img src={logo} className="App-logo w-44" alt="logo" />
      </div> 
        <div className='left ml-20 mt-4'>
        <div className='Icon1 bg-neutral-800 flex p-5 mt-8 mr-8'>
          <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 6.25V8.75H18.75V6.25C18.75 4.87109 19.8711 3.75 21.25 3.75H22.5C22.5 1.67969 20.8203 0 18.75 0H6.25C4.17969 0 2.5 1.67969 2.5 3.75H3.75C5.12891 3.75 6.25 4.87109 6.25 6.25ZM22.5 5H21.25C20.5586 5 20 5.55859 20 6.25V10H5V6.25C5 5.55859 4.44141 5 3.75 5H2.5C1.12109 5 0 6.12109 0 7.5C0 8.42188 0.507812 9.21875 1.25 9.65234V14.375C1.25 14.7188 1.53125 15 1.875 15H4.375C4.71875 15 5 14.7188 5 14.375V13.75H20V14.375C20 14.7188 20.2812 15 20.625 15H23.125C23.4688 15 23.75 14.7188 23.75 14.375V9.65234C24.4922 9.21875 25 8.42188 25 7.5C25 6.12109 23.8789 5 22.5 5Z" fill="#A9A9A9"/>
</svg>  <span className='overview ml-4'>Over view</span></div>
<div className='icon2 bg-neutral-800 flex p-5 mt-8 mr-8'>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2552 13.2351H13.3503L20.6127 20.4975C20.8903 20.7751 21.3471 20.7976 21.6325 20.5288C23.4109 18.8532 24.6343 16.5945 24.9932 14.0554C25.0548 13.6207 24.694 13.2351 24.2552 13.2351V13.2351ZM23.5277 10.2572C23.149 4.76729 18.762 0.380338 13.2722 0.00166177C12.853 -0.0272904 12.5001 0.32611 12.5001 0.746147V11.0292H22.7836C23.2037 11.0292 23.5566 10.6763 23.5277 10.2572ZM10.2942 13.2351V2.33025C10.2942 1.89137 9.90865 1.53061 9.47436 1.59219C3.9978 2.36609 -0.188319 7.15056 0.00653426 12.8845C0.206902 18.7733 5.27721 23.6023 11.1688 23.5283C13.4849 23.4994 15.6251 22.753 17.3848 21.5049C17.7478 21.2475 17.7717 20.7131 17.4569 20.3983L10.2942 13.2351Z" fill="#FFFAFA"/>
</svg><span className='client ml-4'>Client</span>
   </div>
   <div className='icon3 bg-neutral-800 flex p-5 mt-8 mr-8'>
        <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 6.25V8.75H18.75V6.25C18.75 4.87109 19.8711 3.75 21.25 3.75H22.5C22.5 1.67969 20.8203 0 18.75 0H6.25C4.17969 0 2.5 1.67969 2.5 3.75H3.75C5.12891 3.75 6.25 4.87109 6.25 6.25ZM22.5 5H21.25C20.5586 5 20 5.55859 20 6.25V10H5V6.25C5 5.55859 4.44141 5 3.75 5H2.5C1.12109 5 0 6.12109 0 7.5C0 8.42188 0.507812 9.21875 1.25 9.65234V14.375C1.25 14.7188 1.53125 15 1.875 15H4.375C4.71875 15 5 14.7188 5 14.375V13.75H20V14.375C20 14.7188 20.2812 15 20.625 15H23.125C23.4688 15 23.75 14.7188 23.75 14.375V9.65234C24.4922 9.21875 25 8.42188 25 7.5C25 6.12109 23.8789 5 22.5 5Z" fill="#A9A9A9"/>
</svg><span className='users ml-4'>Users</span> 
</div>

<div className='icon4 bg-neutral-800 flex p-5 mt-8 mr-8'>
          <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1674 12.5C22.1269 9.81982 22.1942 7.68457 21.3949 6.25C20.8622 5.29687 19.4154 3.77295 15.7147 4.20508C14.6659 1.70361 13.0683 0 10.9374 0C8.80654 0 7.20888 1.70361 6.16005 4.20508C2.4623 3.77637 1.01211 5.29687 0.479878 6.25C-0.319926 7.68555 -0.252543 9.81885 1.70742 12.5C-0.252055 15.1802 -0.319438 17.3154 0.479878 18.75C1.90615 21.3057 5.44472 20.8779 6.16005 20.7949C7.20839 23.2959 8.80654 25 10.9374 25C13.0683 25 14.6664 23.2959 15.7147 20.7949C16.4296 20.8779 19.9682 21.3057 21.3949 18.75C22.1947 17.3145 22.1273 15.1812 20.1674 12.5V12.5ZM3.09462 17.1875C2.89785 16.8354 3.08535 15.9766 3.82461 14.8296C4.16445 15.1484 4.51796 15.459 4.89248 15.7661C4.97597 16.4355 5.08779 17.0884 5.22255 17.7231C4.02334 17.7666 3.2748 17.5098 3.09462 17.1875V17.1875ZM4.89248 9.23437C4.51845 9.5415 4.16494 9.85205 3.82461 10.1709C3.08584 9.02344 2.89834 8.16455 3.09462 7.8125C3.26113 7.5127 3.89492 7.25244 4.94619 7.25244C5.02968 7.25244 5.13515 7.26709 5.22402 7.27051C5.08527 7.92005 4.97465 8.57528 4.89248 9.23437V9.23437ZM10.9374 3.125C11.3998 3.125 12.0214 3.78516 12.5907 4.94434C12.0443 5.125 11.495 5.33496 10.9374 5.57227C10.3798 5.33496 9.83046 5.125 9.28408 4.94434C9.85341 3.78516 10.475 3.125 10.9374 3.125ZM10.9374 21.875C10.475 21.875 9.85341 21.2148 9.28408 20.0557C9.83046 19.875 10.3798 19.665 10.9374 19.4277C11.495 19.665 12.0443 19.875 12.5907 20.0557C12.0214 21.2148 11.3998 21.875 10.9374 21.875ZM13.9892 14.1929C12.6854 15.1245 11.7362 15.625 10.9374 16.0229C10.1391 15.6255 9.18935 15.124 7.88564 14.1929C7.78847 12.8359 7.78847 12.1646 7.88564 10.8076C9.18789 9.87744 10.1381 9.37598 10.9374 8.97754C11.7377 9.37646 12.6884 9.87793 13.9892 10.8076C14.0858 12.1641 14.0863 12.8354 13.9892 14.1929ZM18.7802 17.1875C18.601 17.5107 17.8524 17.7646 16.6522 17.7222C16.787 17.0874 16.8988 16.4346 16.9823 15.7661C17.3563 15.459 17.7099 15.1484 18.0502 14.8296C18.789 15.9766 18.9765 16.8354 18.7802 17.1875ZM18.0502 10.1704C17.7103 9.85156 17.3568 9.54102 16.9823 9.23389C16.9001 8.57481 16.7894 7.91958 16.6508 7.27002C16.7396 7.2666 16.8446 7.25195 16.9286 7.25195C17.9794 7.25195 18.6137 7.5127 18.7802 7.81201C18.9765 8.16455 18.789 9.02344 18.0502 10.1704V10.1704ZM10.9374 10.9375C10.0746 10.9375 9.3749 11.6372 9.3749 12.5C9.3749 13.3628 10.0746 14.0625 10.9374 14.0625C11.8002 14.0625 12.4999 13.3628 12.4999 12.5C12.4999 11.6372 11.8002 10.9375 10.9374 10.9375Z" fill="#8E8C8C"/>
</svg> <span className='settings ml-4'>Settings</span>
</div>
<div className='icon5 bg-neutral-800 flex p-5 mt-8 mr-8'>
            <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.74228 17.7069C4.31797 17.2826 4.53916 17.4022 3.51572 17.1283C3.05137 17.0038 2.64316 16.7646 2.27402 16.4779L0.0586902 21.9096C-0.155665 22.4355 0.244725 23.0067 0.812108 22.9853L3.38486 22.8871L5.15439 24.7563C5.54502 25.1684 6.23057 25.0399 6.44492 24.5141L8.98642 18.2826C8.45713 18.5775 7.86972 18.7504 7.2623 18.7504C6.31015 18.7504 5.41562 18.3798 4.74228 17.7069ZM18.6915 21.9096L16.4762 16.4779C16.107 16.765 15.6988 17.0038 15.2345 17.1283C14.2057 17.4037 14.4312 17.2836 14.0079 17.7069C13.3346 18.3798 12.4395 18.7504 11.4874 18.7504C10.88 18.7504 10.2926 18.5771 9.76328 18.2826L12.3048 24.5141C12.5191 25.0399 13.2052 25.1684 13.5953 24.7563L15.3653 22.8871L17.9381 22.9853C18.5055 23.0067 18.9059 22.435 18.6915 21.9096ZM12.8419 16.602C13.588 15.8427 13.6734 15.9081 14.7359 15.6186C15.4142 15.4335 15.9444 14.8939 16.1261 14.2035C16.4913 12.8168 16.3966 12.9843 17.3932 11.9696C17.8897 11.4643 18.0836 10.7274 17.902 10.037C17.5372 8.65127 17.5367 8.84463 17.902 7.45742C18.0836 6.76699 17.8897 6.03018 17.3932 5.52481C16.3966 4.51016 16.4913 4.67715 16.1261 3.29092C15.9444 2.60049 15.4142 2.06094 14.7359 1.87588C13.3746 1.5043 13.5387 1.60147 12.5411 0.586331C12.0445 0.0809601 11.3204 -0.116794 10.6422 0.0682648C9.28135 0.439359 9.47129 0.439847 8.10801 0.0682648C7.42978 -0.116794 6.70566 0.0804719 6.20908 0.586331C5.2125 1.60098 5.37656 1.5043 4.01474 1.87588C3.33652 2.06094 2.80625 2.60049 2.62461 3.29092C2.25986 4.67715 2.3541 4.51016 1.35752 5.52481C0.860936 6.03018 0.6666 6.76699 0.848729 7.45742C1.21348 8.84219 1.21396 8.64883 0.848729 10.0365C0.667089 10.727 0.860936 11.4638 1.35752 11.9696C2.3541 12.9843 2.25937 12.8168 2.62461 14.2035C2.80625 14.8939 3.33652 15.4335 4.01474 15.6186C5.10752 15.9164 5.18906 15.8695 5.9083 16.602C6.5543 17.2597 7.56064 17.3773 8.33701 16.8861C8.64747 16.689 9.00761 16.5844 9.37534 16.5844C9.74308 16.5844 10.1032 16.689 10.4137 16.8861C11.1895 17.3773 12.1959 17.2597 12.8419 16.602ZM4.76865 8.59219C4.76865 6.00284 6.83115 3.90371 9.3751 3.90371C11.919 3.90371 13.9815 6.00284 13.9815 8.59219C13.9815 11.1815 11.919 13.2807 9.3751 13.2807C6.83115 13.2807 4.76865 11.1815 4.76865 8.59219Z" fill="#757171"/>
</svg><span className='myaccount ml-4'>My account</span>
       </div>
       </div>
        </div> 
    </header>

    </div>
  );
}

export default App;
