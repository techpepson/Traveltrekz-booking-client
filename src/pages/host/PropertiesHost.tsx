import React, { useEffect, useState } from "react";
import NavbarHost from "../../components/host/NavbarHost";
import Footer from "../../components/user/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/config/store.config";
import {
  FetchHostApprovedPropertyThunk,
  FetchHostPendingPropertyThunk,
} from "../../store/thunks/properties.thunks";
import { Badge } from "@radix-ui/themes";
import { getCookie } from "../../utils/cookieGetFunction";
import { setAuth } from "../../apis/api.config";

const PropertiesHost: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Redux selectors
  const { pendingProperties, loading, approvedProperties } = useSelector(
    (store: RootState) => store.properties.fetchPendingProperties
  );

  // States for pagination
  const [approvedPage, setApprovedPage] = useState(1);
  const [cookie, setCookie] = useState<string>("");
  const [pendingPage, setPendingPage] = useState(1);
  const itemsPerPage = 5; // Items per page

  useEffect(() => {
    const fetchCookie = async () => {
      const cookie = await getCookie();
      setCookie(cookie.token);
      console.log(cookie);
    };
    fetchCookie();
  }, []);

  // Fetch data
  useEffect(() => {
    setAuth(cookie);
    dispatch(FetchHostPendingPropertyThunk());
  }, []);

  useEffect(() => {
    setAuth(cookie);
    dispatch(FetchHostApprovedPropertyThunk());
  }, []);

  // Pagination Logic
  const paginate = (data: any[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const totalApprovedPages = Math.ceil(
    approvedProperties.length / itemsPerPage
  );
  const totalPendingPages = Math.ceil(pendingProperties.length / itemsPerPage);

  return (
    <div>
      <NavbarHost />
      <div className="md:p-16 max-md:mt-20 max-md:p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold text-header-600">
            List Properties
          </h1>
          <Link
            to="/host/add-property-1"
            className="bg-blue-600 rounded-3xl py-2 px-4 text-white cursor-pointer max-md:text-sm"
          >
            Add Property
          </Link>
        </div>

        {/* Tabs */}
        <div role="tablist" className="tabs tabs-bordered py-6">
          {/* Approved Properties */}
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-lg font-semibold"
            aria-label="Approved"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Property Title</th>
                    <th>Room Type</th>
                    <th>Property ID</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paginate(approvedProperties, approvedPage).length > 0 ? (
                    paginate(approvedProperties, approvedPage).map(
                      (property, index) => (
                        <tr key={property.propertyId}>
                          <th>{index + 1}</th>
                          <td>{property.propertyTitle}</td>
                          <td>{property.roomType}</td>
                          <td>{property.propertyId}</td>
                          <td>
                            <Badge color="blue">
                              {property.propertyStatus}
                            </Badge>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center">
                        No approved properties found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="flex justify-center space-x-2 mt-4">
                <button
                  disabled={approvedPage === 1}
                  onClick={() => setApprovedPage(approvedPage - 1)}
                  className="btn btn-sm"
                >
                  Previous
                </button>
                <span>
                  Page {approvedPage} of {totalApprovedPages}
                </span>
                <button
                  disabled={approvedPage === totalApprovedPages}
                  onClick={() => setApprovedPage(approvedPage + 1)}
                  className="btn btn-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Pending Properties */}
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-lg font-semibold"
            aria-label="Pending"
          />
          <div role="tabpanel" className="tab-content p-10">
            <div className="overflow-x-auto">
              {loading ? (
                <div className="flex justify-center items-center">
                  <span className="loading loading-dots"></span>
                </div>
              ) : (
                <table className="table table-xs">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Property Title</th>
                      <th>Room Type</th>
                      <th>Property ID</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginate(pendingProperties, pendingPage).length > 0 ? (
                      paginate(pendingProperties, pendingPage).map(
                        (property, index) => (
                          <tr key={property.propertyId}>
                            <th>{index + 1}</th>
                            <td>{property.propertyTitle}</td>
                            <td>{property.roomType}</td>
                            <td>{property.propertyId}</td>
                            <td>
                              <Badge color="blue">
                                {property.propertyStatus}
                              </Badge>
                            </td>
                            <td>
                              <Link to="/">
                                <Badge color="green">
                                  <button>Details</button>
                                </Badge>
                              </Link>
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td colSpan={6} className="text-center">
                          No pending properties found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}

              {/* Pagination Controls */}
              <div className="flex justify-center space-x-2 mt-4">
                <button
                  disabled={pendingPage === 1}
                  onClick={() => setPendingPage(pendingPage - 1)}
                  className="btn btn-sm"
                >
                  Previous
                </button>
                <span>
                  Page {pendingPage} of {totalPendingPages}
                </span>
                <button
                  disabled={pendingPage === totalPendingPages}
                  onClick={() => setPendingPage(pendingPage + 1)}
                  className="btn btn-sm"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertiesHost;
