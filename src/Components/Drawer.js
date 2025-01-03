import {ThemeController} from "../Components/ThemeController"
import Button from "./Pro-button"

export const Drawer =()=>{
    return(
        <div>
            <div className="drawer drawer-end ">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">

    <label htmlFor="my-drawer-4" className="drawer-button btn ">
        <img src="kebab.png"></img>
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-[360px] p-4">

      <li><a> About</a></li>
      <li><a>Work</a></li>
      <li><a>Contact</a></li>
      <div>
      <div className="flex justify-stretch gap-[190px] p-4 ">
        <p>Switch Theme</p>
      <ThemeController/>
      </div>
      <Button/>
      </div>

    </ul>
  </div>
  <div>
 
  </div>
</div>
        </div>
    )
}