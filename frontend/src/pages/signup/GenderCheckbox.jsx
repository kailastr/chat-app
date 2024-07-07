import React from 'react'

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex gap-3'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className='label-text text-gray-200 text-base'>Male</span>
                    <input
                        type="checkbox"
                        name="gender"
                        id="male"
                        className='checkbox checkbox-sm border-slate-500'
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className='label-text text-gray-200 text-base'>Female</span>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className='checkbox checkbox-sm border-slate-500'
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox

// -------------------Initial code
// import React from 'react'
// const GenderCheckbox = () => {
//     return (
//         <div className='flex gap-3'>
//             <div className='form-control'>
//                 <label className={'label gap-2 cursor-pointer'}>
//                     <span className='label-text text-gray-200 text-base'>Male</span>
//                     <input type="checkbox" name="" id="" className='checkbox checkbox-sm border-slate-500' />
//                 </label>
//             </div>
//             <div className='form-control'>
//                 <label className={'label gap-2 cursor-pointer'}>
//                     <span className='label-text text-gray-200 text-base'>Female</span>
//                     <input type="checkbox" name="" id="" className='checkbox checkbox-sm border-slate-500' />
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckbox