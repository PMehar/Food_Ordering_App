import React from "react";
import reactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className= "header">
            <div className="logo_container">
                <img className="logo" alt=" App logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAA5FBMVEX///86rwE6rwD3kx0zrQD3jgAqqwD+//38/vr3jAD1+/L5/ffx+e33kRYiqQD3iACm2Y7o9eLa79H/+/b+8uX95c7f8df96dTU7MrO6cP+9+/J6LuW0oBlvkpaujn5rV782bZAsSyp2pW236e84a9uwVOJzHWv3J1KtCL6won4qFH5sWn81K34mzT70aX4okSFy2z6xpP938P6u3t+yWGX0YdzwmP3midqwkXdrVGs0Ii+nBJxqxHtmSaTogxPqweGpxRgqgmfnwC+qDfmyJDS1p6qtlSyoiDf2a+wxXXdlhYQsQAbTm9UAAAZCElEQVR4nO1deWOqSpaXsigUkIi7YYlBQYxx18SZ6e43b7ae7vn+32dOFWvhBkpy7x85ffs+ryuHs/3OUlWVyg/90A/90A/90A/9BiTJ+mAydZoJTScDXf7Vl1WMJEXRjannCkQ7Q8jfO4au1H71VeagGkhjvPaRRgjBCCEBCQL9Pwr/AsJEI+joDH9zGcl6a+IdEdEoG5SLhOCfOCbGEDqaw54q/eprPk+SPnT2SNOIwLERMAFSEnzftyn58CR9ClTONyet31A+6nD64SOCeWkwjfLdtXlwxhPDGDIyjMnYOXhr1wajwvbvxo/Um65tdvdTFgKcIN8yx8agp6tyxt5rsqr3WsMJuAnbP66d34efwcHywRA43QKR0Huuq9e9lgI8gfs2PXPaU77pcq/RwH0VcNpOwEo0tB/3VCWndUs1RVVV/dcz01r71AWnXC8Gu3b0vIz8RtTbEy0jFOKbrTPvlCRVbw0MSsNhq6fWpN+LW0k3BS02d2by2HfHKv8mBYKP0dwffSoyAv6Y/gEB2q45Hujqb4IE9ImtcVaP8evHJM2KpOi6cdj7jItQF0MSwjgDHLX0rKv7dlIGrsYFFZDK2khfldozmi4NojiLBuIwROOQBno5HvxSJKBPfcJdGRHWaakovYlpAYPnmMjyROORB/z8IlYUY49xbCrU7JE70ZPXVeMAkJlEr6eA5umDML5i2xv3foW6qY7Ph0gCvjjREx1QM84lFE4+WLAOw2/npfXB8QK3dd1KAp7ezMKBvOxA6LVd43tDp2FjTkUImibASp7aAsaZNOa2moUPqG/ff6d0HMSrmIZSxjIO4MAjhMm+902syJ6Wus/0VpqJsQxp4EGnAknFF4SuSYY9gDzC069cQmmk7jX+Nr6Oo5ckvUnIqVTiDJP9l8UWHDy4IhzNnny9o+4dNe4a8D6GYfLE17IXiFiG7NuWu1975uFwME3TW3+4FiSb7LUr7Ox7XxxGBy5OqwgWvFi7e6aPM1EFYodg7U1nbEBWoyiALOmfGmC1HiRlh7X7CgqVBtxCSkMFYo+/Uji1oUU4KCYcop9TJi7h3QIoku05kJxdyiBrgHamNKnjgURCBJtf6AiGFg8rkRNdqNxMBx6am2n2ARi5qShyz3BcrJGz+oawa3wZL3YmUk6i8Nbap8M9IH3fNHpyTpWX9aFzJJmKTvRN9vRrSgOtI4mVmqlR7MZaLOBH+k6IPe0VuwRFn7ga4W0meJDS5DJJ59EYyCV6ZfIavwIhQrOMO9C8VDP22jm/LmCvfG5UW0tDEYwiXmpO7JBoIHGHdzvU1l5g4CEDgMixbG4kV+P92DgE64qTihbEfsxgh66PT2wHaVa5cKC25mNlzItsRiVMUG9r+vDvTFzhJJIizS+Tm9qU8LEyskr1EBTM6JP2oYyf1Juv5ATWEbdEbiaZ9CWySRkAdKR3H0ZJWaKxP0nrENmXxk3P4nlxw8BccwQc/hgkmmX9GghHyIIChNcleQHd43mxo+QJcueQF2tYZmxTDPcE4uBy4o3i8MlhHCyHYUlD0NZlY6gAUvDRc1pGOj3kDYasw+d7gVwAvHjlZ+3qIWM4CPsl4DR9z6EYYocKpdo0YNMq3vgr8g5pKmSaPcR6WP5Kk48wJErGPBJANMRumNTpPPpLWeJdKHNpj5rNgCvBIuKEz09DHbMHwb87u5fR84O/lSHDz7hobfqY91f3JF0mIm54cwYsHUh5tkp7+bbbth/6sSwZr1hIR08sPFaEmvJQ2Q/loK4ZJMBW+tv7889Zv1R2IIPiFe0hzKkL3LdpTuC3amOqASCX2MG0O+AFnt8/F8tSbcew+YCjNR/4sjX3XTjyJy2L8eJPYj/2vNz04T/deX0+KlE40sTPdE3O9eTyUYvxEiktRmHckg8sg9HSPrkze1uCA+hsxM9NicJRAh2IfTTZ3xvTpDVXaCAfIf4aUOVDmsnFl/Zo9TaC/7wv6i/dxzhIk3LgzQbfm2YYQdUxqoL5YXIpUx6Rts/6yf6bOAPhdFf1xfKR6+dJXaer8OBz7vQBLg8wI8EMmbyFNExuL6nFPO+eFltQtZenp9mjPCTU4gtcwn2iMV4524sF4xPaKBtw7+2sXig7S/Fp91xpzxpPb+W5geFrmht8F6qR11yTBX+E8h1SfIOdjJJ1dgvqAEaL+rxfed5U62/luYEDTqu74Nz+xAkF8TcmP0T+NYtQX5Dp9VcoA/OuVOm+1FdbqbJp1N9KcwOym3ZEcW5YgBTzvOENASxjP4Mrun3qzhbV9zbggPrnErgRS+SmhThcMy0M01lgTJl/FHv3NPY4mcSyu6ORfwvurAMKJ1Y3bWnTaJTnopvpplDxgoA05cpx2A9l26O9o1NBb9/mXeoGnqjF7ERx1m7PRJE5hTJItXFSuS2epukfaSSDNC98vkmAsfHp+7svC1Au8MpvW8bNrg2OWpyX5QWMdJOhcMXW4GGEFmIihd6is0lS/6Uxa1NuViOpM6fcdF7Exq4kD811UjEqhtAUh8f+Qvi84QtnBQPUeXt6YX9/gmyqoripvDcaT2UpWivl0AAVFsrSelwmgbTIt3sY4fUFZ9KeP312Ks/zJ/G90vkUG4tqA8JNWaI5pO5unCPmo2EiVVZMCC1et+CbLppfZ/606oNsxOp7ZStWG41qtSGW5dEGdqT3dJBjcPsDMckHrkFO7PB5sCRsXf7Y81sduOm+icDCXKxSqu8e4YC7pETRQFMK6Jl+JCnJJFpmYgFPrnwOLAZCJWCaxfalwZhprB7hIE1DPx5yEcixQAV1yPWwUOQ91A+M7atf04Vspt/eVMXPgBfQtUtGI7WfO/3udrsdUdpuu53r5pWuEiOUH9LUaLEskQyJoMzAwtoNBD76hFDZeWmEvIDRnCtAtTvd0XK2m7+tPhsNsfG5WL3sZrdKVeOkSgT+LDczypHL/TUzzFUhh8U3oER7Izbm3V3EyxlmpM52s3tZVRv1p/rn2262fN92+/1+p/N8A3L13MTDxkXi29Tjuz2aEfyMckC3v+R5V2+sFtWYmU/eVDvvu7dVlfExe+8CB+12XtgIPy9EZWKMctcCDC73RzhUUNXD2jXzD6i7EGO5VKviW/q15w1IRHx6auxGnXbhCDRJkhKk5QabJj9Vcgw/2LIIuu1FpGUjxczTKPXSqCo2GvXFjsGCdme7nM3BaMR6/empThPuG6Sm9Cy/0bDSW9K7NkMODD9X96IThhgmmFXq/s9AZI3FCPQOzOZlARKqi9XF23y23Pafb1kMJS9srac7K7dIzYz0RG2eMSZGHgXvJ86snqpsbJ4oJFh1+8uXBvBRXazmm1G/SLUdkGHsAY45TW2gcQ5ACDkAWGDnc+/92aIhAgE2m8eSGQWmBJCtXq8vXmbvIR/t9jNQLgPS7XhCDPs54dmUH2Dwo5DpaXnbpBJ4X6AXsPbIFPqrKIzWP1822w41GoiZo+VmttvNNts8N1papwZbcqYBaw6YxbUdfa8V6Cu2gUDf6m/hVc5iQ5qPOtT63zfzt6pYr67msw0YTS6tcWLPhC7jXZ6OXFmGrENn1rO0ov2RZSya5zcx8tWddne5e1s0wIPNN+/dfqedGzUOU8zkqzipQf8tshkSNa0HvlC0Bg+6Jb6we96NtWwF/hiiZhV0rX8Djp2QLAihzSDi3X47kM6XQ0nYlIFQWnjq43nXaDRYRjNaJMEHfPJq2We+uN3fUqOZjXJ+YYyzEHFzfWDIx38UhidpopmFi9bvoGcso1l+xsyI4q5LGQFkQxFa/XO+yd0/NCPfhLB9+91AY5KuhqJosqw2LWL/IXVWjcaiQ4vpCfSE/K3yvN2taLBZzN87RSLNWIuy35zMNHkwE1WpZOdqXnaBKBrYSNtVPVGyeXf5BpomLl6WhVugwyRqvOb6wJrwbZnQhcmmXyTzDum9QU0echYxSXEgaIqL+V3dT53E5a/XXGri8pKJOv2qd08zoQOGT1lZzF+qUaQRgb07hwbk5NJec2XONr7AzMc9Y1gvIsOb78+d5QIADiSW4mJzfzUtadi+5vJGfPMdW2FwkQ+HO5qj/TeqXXOKVqTu5mVF0WX3gVpa0kvPx8xrNI0V2EzETG1cvAEnbSkvAPuDf1I0VjhQ8mTFQ4+5mFFehbOSqRjFndmIxf3G56jwJy9Rghtz2cxFZvTCbREWKemfWWkdTi9hJo/SqxfUrDBJ75QXZv+ltTYAAsRqluft6iXJFKT2sg681JfLOk0v7/uOUzIjyeRDAFnJ2HeEykpY12iIm8oImPm8Xa3ISZFkED7meXtWMvZ9Q14jMJZGddeudEHRxPe7vuMMRZJBZJ/n7XKGmfsGPbs042/sIM73QUL10jxAwoyZ5+1Zb4bugJeQlVF5zNkQCmVmV5YHWMfM5It6vM0kc8wF6JmCGDEw+zb4NPGlLGb2JMo08ykMD2cEUnzMs02rF43P96BIQaHmqqzeZpRqxs28G2QLPDOHwqPxQbDchQWXFa1jluWbo00I8tbNLC6fEUjhdVKseNGIJ4EoM6UBGoTD8mwuz8ySM04yRcsYYa05Di2UmeqonLF0NWrp5a01N3nJ4Jw12YjaG5pTikljltpM470cZnpRDSBvF2DMS+ZkhOkGbWlRqfEZuy+pTGaMsAaAtJx3eMAzg1CheYjnHa1d1JMpzWeGm5flRE0nZAb7OW+Ojjg1Q4XcmURhDISYJMV/ZlpXEjNrEl5T3vaMnA00RVZHdFhNOd0v67MkoCRmorVU+RtnFj+zjoUC7mwpsjpfqvayDdSuFGaiynHcZr1NJr8ZA9LyJwEdVlLmQPKyzp4pxQFEnWNi5db8Md85QwXWrSyfmGDSSGxWr573ZpKs6nqvd2ZXuovUDDpnRWZn9MxyWbLOW2Nqs/J4fZPWKWpEmaCpD6fm/uinyLbWzbHRumGcyj5QsyLTczWUWYSTeznuhqpUo8oBMTapFcMZuTfe+4TQTbUCvx+EdEzYc0hYX9Oflh9cVSGXtM8sk9Ty5mdMMHz5osMU75PyV5NbzSMONtU62WQzoHiy5SxN/ciXFYh8fIcWPpzTqzPHlXHDoRX1K0pvamva9R12sHDVS0Va5hcBWAOM0moGn87nPNj8T4OftWCoU3zrtxyb4GiyUEg/SG3QEM9PnKWeFawKx4WaXmpmHV7OtK4f+GUuq+ywmqb4L/9qE3wqiRPBXIWB4+CyClYlal5muxEtVzd0GTQsuOLFiHmEf/vL6TL/0FTSO+mQq3MGcjg9R4p1I6RJ5qexkEPP2vOgsMyVlUDzGn/92x/nWAm3cvWF6LX0IrYzNIhgVsGiRM/HaZsBF5CjRBPMYPDVy+dVo/HPf8cYnZgK3S7IdSZG8yhEW1Fdv+WSE+xZVXiVhuplEM2Fkpue3h4qaCjzJjP6rP/1j5MdnBD452NzIKtG034VEslcrR7poS8rvrRpomX2GfHPxlwDr+Ob2Q5mGcX0xDw89ymkXSNiVSJi070QWqbNVuJF3uzGLZ8E34GLb0HRy/ozfM4FKA7R/GEYwDqs4VcVN6k39Fd//TP7RZhYQ6kiT47BDtWp164OkOjhmtELw/vXSDWzLsA+c0PoqmBCmoGqbcMZjPRKwE31L5mViQLdy1XSm352f6Ybt1yaBBgLu8UXawdLV1NqJvhnVFWnfgJre7bBFOvGJC0/Sp35f6S/A6Ty6g2AlalPUi4h+t/Vpb4qsxgQ5D3FYj2Dz87euLBaoNmGTJcAxvMXEW3/8w9uQyqB7oCqj+0zoAbh61vlBDMwecd/MlSbZgP2qbLWplp4Ib6jPs8DZlLOrP1faSVDmj/Vg91EzwWd6yNXarBFSKGkN0UDO2u5J0u9lGgdN9xz77/fAmZ2Scbc/5/Y61IVW7dq4MGyOxaEdGNlbLCUH5E7iviUZPNkM8zsZhnyMdwJjK5D++PvVcbNLH6T9L9/JnaHEfUTYwvHuznyNnM9y9ADH67dvUw7s07zjNVE+5vQ1A+E8zfmAVIFs38kgiGCodDpm0tbGhL/6rUEBkwK1lZTJK9xRjIoM6I1QGHAs21azsJ/+WcjXSHv/Rm5LESsAZt9xRdSAISvwuWgjpl7LPMcTV6zep2BAfG8lG+wXbYw/md90T99GREa2wfo/M5/9A3XUbnONABdT3ZukZtVCo3vbkzCq4OLVRk8x//396RiluA7RJH9lFxSsVvNFontEYmKt1Y44vcDoIAVcYKekGjLOezobNk+Rv+IA3SCvOEq5Gn0rzNqhtHkSliv0cwf3UJuN0naZyEH4UDNJH4Zvw57TI6QkkTXFeZEcEf1iuoIl/NMwH1X9Edijii9+cid1CLpmhO9Nq5hHUuGBaFguV48NqCENW6aPcrBnm4XJEOuzoDQvQ3o0vBrwstHXnZrLoxTNyi9RldwZFYIQtFMtxz4bbqqWj5ciJShwVy7TlBf+h7hwc2A2Ff5qQXSKKtosWsW2FSKEphN+Lst5pc1iE0151ymGT0Q0LVai+oFv+qUsVHXNOuC0jlnOumhit/zmTkHo5zMoFiYm16xlxvIP9jbBGul8AIZiyZk7iqOEaFsJbuFwV9Ghe6DCPrNREMXFLKi0BhhIfsdyYOrc0ZSk9oaws2SNh1raTh7K+OylZLufbAdu5jDCKwG7B/TeYje9XLZ1akRh9DfK7Rc9irVpqeZRzznxA3a0woOwx2I7XxyBGbgKnonmxVy36VdA/4ebS3jTDomP7KTorrmdp5jsDKKX/oxvQ09ceUaGyOmdW0JkkmQkOziTOBNP4C04MptNKnnxzZfS9O9h2LnwD7BIVFNRnY40eBJ0KfSIAjWEA0fmc2Jsl+DvcsKpLOqKnZ5k1KtXJNZF0kax/45uqsoWlPTSrluREdAWJWaLh9W2B4IEz+DvNOSwegKcmztaVqBMnLoufaDW+mp5sntxUKTXYfM3Xm6EpQudKeVHAUdlErrBKqm5fjqXLwwxaBLMjHNs9M0cHN3ii6S7ibrI+O72mSuv+fGa+1pumjSQMpSBQV8G0BprsLDxUowhovBQwVYCoK2MjvAtiwt1yzjdRqcZogYH+gr0jiNVLCvqBYJ8h6I/JOLKAa89n5wkZfWGj5ISHZj3qGlnSveFSYDn/FEzBQBQwqxZBAZ1hwSJXE9O0YxWckQoXnxshQHECvWjgZvUNLwqN05yJulzG6ajAiTjZpaoULLWgYKd9xRnDOfEZj70OzWRTcGqQSGd5ycPzG0yeMGE5J3jhvW9NUT1w3xVNEtHJRyh+iMklGLurbfNkQ1ggk+PRlkohHhavemCCnBSB1nxUFuH2xOGwZWvyV7GquBsa2vsmqG6Wlbl9dHq/SMFHpmS/YdtSkmqIQsICLZPb3REFno7xoxYqFb9k01Qpv5Yy3zZtAe33abg0usSKphacS3zxySBiCQCOUg55BYmnSSJTIHy06kCYoB68oQ01WDcrSmOngabqztmtPW5QtSDVcjtjc94xj0NaDd7MZdD1Jvf8YIMN1Dm6ZfoWQsZeCTYVowiOmWOTX0K2qiDte+5U0HZ65YGbgAxouP8N7FDfkY0p3dgpfA9nsWZGRKXKnGRHAd4/qBjLLh2eb4/CGUKut/lCyXCj0tZ30OzxN7LKvh4nb8OlQ/PLUyDkszWPMPxo3TGJWh07x0PKjU8nzQ0S85UUNfZ6JnYBG+16L7odHn/bFiTiqSFQAg4js3j9VQWoPeJZCmjG165E6JfixNava0g0CVkD02QsWaSgMdvDWDX2Sd47xP6fJJhzrgGgigj1eZLpGpnUHCYOSu6zNZHSSpUqPFWlrresibKg4dtiH+/adz3KbxaT8yHBthD+j+JxSVgWN7DEkBfmG7RN6/D3C+XznbxwssHtGA6TAn/chV1AZ72vjEqTmDLyJ9LeCMZBIRATPqB0b37aoaktzyBNbx8b/kKB2edOescJhk3IECort32R0ldWiy1jrG1vg7zj+uQVp7PvEC4NyE0HD/iQT6xEOsVkdPTyzzmi+T1DtcaIQh6gju3fBaHUw/ggNFyz1r5BbJBl00dGIzLOEE8ZjjwkdKK62pF53KjfHH8FuPotRNcrFLCXDf8saF5kKna3Z2Jfu4JnyjWAJSWu7F8yZpS9B/tb0bEDP4Ht1YW6/s8MNAUcn+clr9dSSPfS05SyuTV9KKFEX/3gU8HHzDYOodfToWGOosEjTAd9/IQ4rUqX3l8EV2PrOmQZ5o0fMO6Wn0qizLKj2s3Rg7puXDi1rASOg+sN/8hUeeq46F0yfQxZJJHtCDXeh0PEmdEIrDGXpOqBCfzO82lgzppnvzBN2Yh/CgUHZ2DfcRdjrw2VPSv5ud8drGp+etFSFqXc53nT17g9ThwUUkrPkXJapztjf56qNNC5DSMw424iYHTh+c1N7oH4L9/fTW2plvJ7k38fzgoPacIqFT59hyhtcqN7+MJFlvOa5ALp88n/DBTqC31+Oe+gt98S2qyfqweUQQX0i47ueEKBsaWDwoV+33MZTLBBhl6lk+gnBCI0xClMWgKPirL7EwKSqE+qnTNBk1mxQH3Kij/dAP/dAP/dAP/Z70/8Rw5XuMfyzcAAAAAElFTkSuQmCC" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ()=>{
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <div className="img_container">
                <img className="img_1" alt="restaurant logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k1jxhhboi0miir5fsuej"/>  
            </div>
           
            <h3> Green Chatni Foods</h3>
            <h5>⭐⭐⭐⭐</h5>
            <h5>North Indian, Thali's , Chinese , LBS Marg </h5>
            <h5>35 minutes</h5>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className ="body">
            <div className="search">Search</div>
            <div className="res_Container">
                {/* restaurant cards */}
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div class="app">
            {/* //header
            //body
            //footer */}
            <Header/>
            <Body/>
        </div>
    )
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)