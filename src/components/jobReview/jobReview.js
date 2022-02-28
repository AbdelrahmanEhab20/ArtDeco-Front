import Footer from "../Footer/Footer";
import "./jobReview.css";
import PaidIcon from '@mui/icons-material/Paid';
export default function JobReview() {
    return (
        <>
            <br />
            <br />
            <div className="MainDiv container">
                <div className="FirstWrapper">
                    <div className="topLeft">
                        <span className="Sign-Page">Review</span>
                    </div>
                    <div className="topRight">
                        {/* <button type="button" class="btn  btn-info btn-circle">
                            Save Job Post
                        </button> */}
                        <button type="button" class="btn">
                            Save Job Post
                        </button>
                    </div>
                </div>
                <hr />
                <div className="SecondWrapper">
                    <div className="topLeft">
                        <div class="form-group">
                            <label>HeadLine</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Enter a Descriptive HeadLine"
                            ></input>
                        </div>
                        <small>
                            Your Headline Must Be Descriptive to help the companies to
                            understand what you really want
                        </small>
                    </div>
                </div>
                <hr />
                <div className="ThirdWrapper">
                    <div className="topLeft">
                        <h5>Describe Your Job</h5>
                        <h6>
                            This is how companies will figure out what you need and why they
                            should make an offer to you.
                        </h6>
                        <h6>
                            Include your expectations about what you want , what you are
                            looking for in work relationship , and any thing or details
                            related to what you need or instructions to the company.
                            <span>Here are several examples</span> that illustrate best
                            practices for effective job posts.
                        </h6>
                        <div class="form-group">
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="10"
                            ></textarea>
                            <br />
                            <input
                                class="form-control file-Attach"
                                type="file"
                                id="formFileMultiple"
                                multiple
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="ForthWrapper">
                    <div className="topLeft">
                        <h5>Details</h5>
                        <div class="form-group">
                            <label>Budget</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><PaidIcon /></span>
                                <input
                                    type="number"
                                    class="form-control"
                                    aria-label="Amount (to the nearest dollar)"
                                ></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Estimated Date</label>
                            <div class="input-group mb-3">

                                <input
                                    type="date"
                                    class="form-control"
                                    aria-label="Amount (to the nearest dollar)"
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div className="topRight">
                        <div className="Special container">
                            <h6>
                                Enter The Details Of Your Work To make It Clear To the Companies
                                to know everything you need to finish your work in right way.
                            </h6>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="FirstWrapper">
                    <div className="topLeft">

                    </div>
                    <div className="topRight">
                        <button type="button" class="btn">
                            Save Job Post
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Footer />
        </>
    );
}
