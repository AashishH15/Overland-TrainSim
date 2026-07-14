import{n as e,r as t,t as n}from"./index-OjF85I0y.js";function r(r){if(document.getElementById(`bond-modal-backdrop`))return;let i=document.createElement(`div`);i.className=`modal-backdrop`,i.id=`bond-modal-backdrop`,i.innerHTML=`
    <div class="modal" style="width: min(32rem, 94vw); text-align: center;">
      <h2>${n(`coins`)} Issue Transit Bond</h2>
      <div class="sub" style="margin-bottom: 1.5rem;">Raise emergency cash to save your network. Repay in 10 simulation minutes.</div>
      
      <div style="margin: 1.5rem 0; padding: 1.2rem; background: rgba(0,0,0,0.25); border-radius: 6px; border: 1px solid rgba(255,255,255,0.05);">
        <div style="font-size: 0.85rem; color: #8a96a6; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em; margin-bottom: 0.4rem;">Bond Size</div>
        <div id="bond-val" style="font-size: 2.2rem; font-weight: bold; color: var(--accent); font-family: monospace;">$1,000,000</div>
        
        <input type="range" id="bond-slider" min="500000" max="5000000" step="500000" value="1000000" 
          style="width: 100%; margin: 1.2rem 0 0.8rem 0; accent-color: var(--accent); cursor: pointer;" />
          
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: #6b7788; font-family: monospace; font-weight: bold; margin-bottom: 1rem;">
          <span>$500K</span>
          <span>$5.0M</span>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-top: 1rem; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 1rem; text-align: left;">
          <div>
            <div style="font-size: 0.75rem; color: #8a96a6;">Revenue Tax Rate</div>
            <div id="bond-tax" style="font-size: 1.25rem; font-weight: bold; color: var(--good); font-family: monospace;">18%</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: #8a96a6;">Repayment Term</div>
            <div style="font-size: 1.25rem; font-weight: bold; color: #ffffff;">10 minutes</div>
          </div>
        </div>
      </div>

      <div id="bond-warning" style="font-size: 0.84rem; color: #ff5555; background: rgba(255, 85, 85, 0.08); padding: 0.65rem 0.8rem; border-radius: 4px; border: 1px solid rgba(255, 85, 85, 0.2); margin-bottom: 1.5rem; line-height: 1.4;">
        ⚠️ Taxing 18% of all ticket sales. You must have $1.0M cash at the deadline, or suffer a default Strike (+1 Strike).
      </div>

      <div style="display: flex; gap: 0.6rem; justify-content: flex-end;">
        <button class="btn quiet" id="bond-cancel">Cancel</button>
        <button class="btn primary" id="bond-confirm">Issue Bond</button>
      </div>
    </div>
  `,document.getElementById(`hud`).appendChild(i);let a=i.querySelector(`#bond-slider`),o=i.querySelector(`#bond-val`),s=i.querySelector(`#bond-tax`),c=i.querySelector(`#bond-warning`);function l(){let n=parseInt(a.value,10),r=e(n),i=Math.round(r*100);o.textContent=t(n),s.textContent=`${i}%`,c.innerHTML=`⚠️ Taxing <b>${i}%</b> of all ticket sales. You must have <b>${t(n)}</b> cash at the deadline, or suffer a default Strike (+1 Strike).`}a.addEventListener(`input`,l),l(),i.querySelector(`#bond-cancel`).addEventListener(`click`,()=>{i.remove()}),i.querySelector(`#bond-confirm`).addEventListener(`click`,()=>{let t=parseInt(a.value,10),n=e(t);r.issueBond(t,n),i.remove()})}export{r as openBondModal};