"use client"
import React from 'react'
import { Package, Bike, BedDouble,WashingMachine,Wifi,TabletSmartphone,Baby} from 'lucide-react';
import "./new-features.css"

export default function NewFeature() {
    return (
        <>
            <div>
                <h1 className='new-fea-tag'>Rent Furniture & Appliances  </h1>
            </div>

            <div className="feature-main">
                <ul>
                    <li><div className="fea-img">
                    <Package  size={50}/>
                    </div>
                        <div className="fea-name">
                            <h4>Package
                            
                            
                            </h4>
                        </div>
                    </li>
                    <li><div className="fea-img">
                    <BedDouble size={50} />
                    </div>
                        <div className="fea-name">
                            Furniture
                        </div>
                    </li>
                    <li><div className="fea-img">
                    <WashingMachine size={50}/>
                    </div>
                        <div className="fea-name">
                            Appliances
                        </div>
                    </li>
                    <li><div className="fea-img">
                    <TabletSmartphone size={50}/>
                    </div>
                        <div className="fea-name">
                            Electronics
                        </div>
                    </li>
                    <li><div className="fea-img">
                    <Bike size={50}/>
                    </div>
                        <div className="fea-name">
                            Bikes
                        </div>
                    </li>
                    <li><div className="fea-img">
                    <Baby size={50}/>
                    </div>
                        <div className="fea-name">
                            Baby & kids
                        </div>
                    </li>
                    <li><div className="fea-img"> <Wifi size={50}/></div>
                        <div className="fea-name">Networks</div>
                    </li>
                </ul>
            </div>
        </>
    )
}
