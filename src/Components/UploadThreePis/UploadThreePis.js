import React from 'react';

const UploadThreePis = () => {
    return (
        <div className="shipping">
            <div className="form-container">
                <form >
                    <div>
                        <p className='form-title-upload'>Upload Three Pis</p>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Name" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Price" />
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
                            <input type="text" placeholder="Product Meterial" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Pant Meterial" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Dupatta Meterial" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Categories" />
                        </div>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Brand" />
                        </div>
                    </div>

                    <div className="input-field">
                        <input type="submit" value="SAVE & CONTINUE" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadThreePis;