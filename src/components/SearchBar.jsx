import { useContext } from "react";
import { MDBBtn, MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";
import ProductContext from "../context/ProductContext";

// style={{ display: "flex", justifyContent: "center", marginTop: "1%", marginBottom: "1%" }}
// i must download react use form

export default function SearchBar() {
    const { setSearchTerm } = useContext(ProductContext);

    const handleChange = (e) => {
        e.preventDefault();
        // console.log("submıt", e.target.value);
        setSearchTerm(e.target.value);
    };

    return (
        <form>
            <MDBRow className="mb-3">
                <MDBCol size="8" md="10">
                    <MDBInput onChange={handleChange} label="what you are looking for" id="form1" type="text" />
                </MDBCol>
                <MDBCol size="4" md="2">
                    <MDBBtn type="submit" outline color="danger">
                        search
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </form>
    );
}
