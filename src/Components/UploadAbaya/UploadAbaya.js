import React from 'react';
import './UploadAbaya.css';

const UploadAbaya = () => {
    return (
        <div className="shipping">
            <div className="form-container">
                <form>
                    <div>
                        <p className='form-title-upload'>Upload Abaya</p>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya name" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Price" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="file" id='upload-photo' />
                            <label id='upload-photo-label' htmlFor='upload-photo'>+ Add a Photo</label>
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Type of product" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Details" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Long" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Size" />
                        </div>
                    </div>



                    <div className="input-field">
                        <input type="submit" value="SAVE & UPLOAD" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadAbaya;