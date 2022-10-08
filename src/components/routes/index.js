import React from "react";

import { Routes, Route } from "react-router-dom";
import AddProductInvoicePage from "../../pages/AddProductInvoicePage";
import AddProductJobsPage from "../../pages/AddProductJobsPage";
import AddProductQuotesPage from "../../pages/AddProductQuotesPage";
import CompaniesPage from "../../pages/CompaniesPage";
import ContactsPage from "../../pages/ContactsPage";
import ForgetPasswordPage from "../../pages/ForgetPasswordPage";
import InvoiceIdPage from "../../pages/InvoiceIdPage";
import InvoicePage from "../../pages/InvoicePage";
import JobIdPage from "../../pages/JobIdPage";
import ProductPage from "../../pages/ProductPage";
import JobsPage from "../../pages/JobsPage";
import LoginPage from "../../pages/LoginPage";
import QuotationPage from "../../pages/QuotationPage";
import QuotationPageId from "../../pages/QuotationPageId";
// import Navbar from "../Navbar/Navbar";
import QuotationSettings from "../../pages/QuotationSettings";
import QuotationCustomDefaultFields from "../../pages/QuotationCustomDefaultFields";
import QuotationCustomEditFieldsLabels from "../../pages/QuotationCustomEditFieldLabels";
import QuotationCustomLineItemLabelsPage from "../../pages/QuotationCustomLineItemLabels";
import QuotationShowHideListColumnsPage from "../../pages/QuotationShowHideListColumns";
import QuotationShowHideEditFieldsPage from "../../pages/QuotationShowHideEditFields";
import QuitationShowHideLineItemColumnPage from "../../pages/QuotationShowHideLineItemColumns";
import QuotationPDFPage from "../../pages/QuotationPDF";
import QuotationStatusesPage from "../../pages/QuotationStatuses";
import ProductSettings from "../../pages/ProductSettings";
import ProductShowHideListColumnsPage from "../../pages/ProductShowHideListColumns";
import ProductShowHideEditFieldsPage from "../../pages/ProductShowHideEditFields";
import ProductShowHidePanelColumnsPage from "../../pages/ProductShowHidePanelColumns";
import ProductCustomDefaultFieldsPage from "../../pages/ProductCustomDefaultFields";
import DatabaseShowHideListColumnsPage from "../../pages/DatabaseShowHideListColumns";
import DatabaseCompanyCustomDefaultFieldsPage from "../../pages/DatabaseCompanyCustomDefaultFields";
import DatabaseContactCustomDefaultFieldsPage from "../../pages/DatabaseContactCustomDefaultFields";
import DatabaseCompanyShowHideEditFieldsPage from "../../pages/DatabaseCompanyShowHideEditFields";
import DatabaseContactShowHideEditFieldsPage from "../../pages/DatabaseContactShowHideEditFields";
import DatabaseCompanyTags from "../../pages/DatabaseCompanyTags";
import DatabaseContactTags from "../../pages/DatabaseContactTags";
// import DatabaseCompanyTypes from "../DatabaseCompanyTypes/DatabaseCompanyTypes";
import DatabaseCompanyTypesPage from "../../pages/DatabaseCompanyTypes";
import YourInformationPage from "../../pages/BusinessSettings/YourInformationPage";
import YourBrandingPage from "../../pages/BusinessSettings/YourBrandingPage";
import TaxCodesPage from "../../pages/BusinessSettings/TaxCodesPage";
import PDFGenerationPage from "../../pages/BusinessSettings/PDFGenerationPage";
import UserManagementPage from "../../pages/BusinessSettings/UserManagementPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/forgetpassword" element={<ForgetPasswordPage />} />
      </Routes>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/quotation" element={<QuotationPage />} />
        <Route path="/quotation/:id" element={<QuotationPageId />} />
        <Route path="/quotation/addproduct" element={<AddProductQuotesPage />}/>
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/jobs/:id" element={<JobIdPage />} />
        <Route path="/jobs/addproduct" element={<AddProductJobsPage />} />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route path="/invoice/:id" element={<InvoiceIdPage />} />
        <Route path="/invoice/addproduct" element={<AddProductInvoicePage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/quotationsettings" element={<QuotationSettings />} />
        <Route path="/jobssettings" element={<QuotationSettings />} />
        <Route path="/invoicesettings" element={<QuotationSettings />} />
        <Route path="/quotationsettings" element={<QuotationSettings />} />
        <Route path="/quotationcustomdefaultfields" element={<QuotationCustomDefaultFields />} />
        <Route path="/quotationcustomeditfieldslabels" element={<QuotationCustomEditFieldsLabels />} />
        <Route path="/quotationcustomlineitemfieldslabels" element={<QuotationCustomLineItemLabelsPage />} />
        <Route path="/quotationshowhidelistcolumns" element={<QuotationShowHideListColumnsPage />} />
        <Route path="/quotationshowhideeditfields" element={<QuotationShowHideEditFieldsPage />} />
        <Route path="/quotationshowhidelineitemcolumns" element={<QuitationShowHideLineItemColumnPage />} />
        <Route path="/quotationpdf" element={<QuotationPDFPage />} />
        <Route path="/quotationstatuses" element={<QuotationStatusesPage />} />
        <Route path="/productsettings" element={<ProductSettings />} />
        <Route path="/productshowhidelistcolumns" element={<ProductShowHideListColumnsPage />} />
        <Route path="/productshowhideeditfields" element={<ProductShowHideEditFieldsPage />} />
        <Route path="/productshowhidepanelcolumns" element={<ProductShowHidePanelColumnsPage />} />
        <Route path="/productcustomdefaultfields" element={<ProductCustomDefaultFieldsPage />} />
        <Route path="/databaseshowhidelistcolumns" element={<DatabaseShowHideListColumnsPage />} />
        <Route path="/databasecontactshowhidelistcolumns" element={<DatabaseShowHideListColumnsPage />} />
        <Route path="/databasecompanycustomfieldspage" element={<DatabaseCompanyCustomDefaultFieldsPage />} />
        <Route path="/databasecontactcustomfieldspage" element={<DatabaseContactCustomDefaultFieldsPage />} />
        <Route path="/databasecompanyshowhideeditfields" element={<DatabaseCompanyShowHideEditFieldsPage />} />
        <Route path="/databasecontactshowhideeditfields" element={<DatabaseContactShowHideEditFieldsPage />} />
        <Route path="/databasecompanytags" element={<DatabaseCompanyTags />} />
        <Route path="/databasecontacttags" element={<DatabaseContactTags />} />
        <Route path="/databasecompanytypes" element={<DatabaseCompanyTypesPage />} />
        <Route path="/yourinformation" element={<YourInformationPage />} />
        <Route path="/yourbranding" element={<YourBrandingPage />} />
        <Route path="/taxcodes" element={<TaxCodesPage />} />
        <Route path="/pdfgeneration" element={<PDFGenerationPage />} />
        <Route path="/usermanagement" element={<UserManagementPage />} />
        
      </Routes>
    </>
  );
};

export default AllRoutes;
