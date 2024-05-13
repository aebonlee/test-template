import React from "react";
import Layout from "../../components/Layout";
import creteriaPDF from "../../pdf/criteria.pdf";

const Examinationcriteria = () => {
    return (
        <Layout>
            <div className="border-b border-purple-700 pb-16 pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 uppercase text-orange-500 text-sm font-medium mb-4 mx-auto">
                            경영시각화정보능력
                        </div>
                    </div>
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">시험출제기준</h1>
                </div>
            </div>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="rounded-lg">
                <object
                  type="application/pdf"
                  data={creteriaPDF}
                  width="100%"
                  height="1280px"
                >
                  <embed
                    src={creteriaPDF}
                    type="application/pdf"
                    width="100%"
                    height="1280px"
                  />
                  <param name="initZoom" value="fitToPage" />
                </object>
              </div>
            </div>
          </div>
        </Layout>
    );
};

export default Examinationcriteria;