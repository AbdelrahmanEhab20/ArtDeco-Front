import Footer from "../Footer/Footer";
import "./jobPorposal.css";
import PaidIcon from '@mui/icons-material/Paid';
export default function JobProposal() {
    return (
        <>
            <br />
            <br />
            <div className="Proposal MainDiv container">
                <div className="Proposal FirstWrapper">
                    <div className="Proposal topLeft">
                        <span className="Proposal Sign-Page">Proposal</span>
                    </div>
                    <div className="Proposal topRight">
                        <button type="button" class="Proposal btn">
                            Send Proposal
                        </button>
                    </div>
                </div>
                <hr />
                <div className="Proposal ThirdWrapper">
                    <div className="Proposal topLeft">
                        <h5>Cover Letter</h5>
                        <h6>
                            This is how companies will take to the user to offer them what they can
                            do according to the data they have from the info of user
                        </h6>
                        <h6>
                            Include your abilities about what you can do , what you are
                            looking for in work relationship , and any thing or details
                            related to what you what you can do or Questions to the user.
                            <span>Here are several examples</span> that illustrate best
                            practices for effective job proposal.
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
                <div className="Proposal ForthWrapper">
                    <div className="topLeft">
                        <h5>Details</h5>
                        <div class="form-group">
                            <label>Budget</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text"><PaidIcon /></span>
                                <input
                                    type="number"
                                    min={0}
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
            </div>
            <br />
            <br />
            <Footer />
        </>
    );
}
