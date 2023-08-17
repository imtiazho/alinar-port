import React from 'react';
import './UploadSharee.css';

const UploadSharee = () => {
    return (
        <div className="shipping">
            <div className="form-container">
                <form>
                    <div>
                        <p className='form-title-upload'>Upload Sharee</p>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Sharee Name" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Sharee Set Price" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Only Sharee Price" />
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
                            <input type="text" placeholder="Type of Product" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Product Material" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Share Long" />
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

export default UploadSharee;