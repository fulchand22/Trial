import ModuleIndex from "../Module/ModuleIndex.js";

const CreateProduct = async (req, res) => {
  const { title, price, categorie, description, rating } = req.body;

  if (!title || !price || !categorie || !description || !rating) {
    return res.json({
      message: "Missing Data",
      status: 302,
      success: false,
    });
  }

  try {
    const result = await ModuleIndex.Products.create({
      title,
      price,
      categorie,
      description,
      rating,
    });

    if (result) {
      return res.json({
        success: true,
        message: "Data created successfully!!!",
        status: 201,
        data: result,
      });
    }
  } catch (error) {
    return res.json({
      message: "Internal server error" + error,
      status: 500,
      success: false,
    });
  }
};

const GetData = async (req,res) => {
  try {
    const Result = await ModuleIndex.Products.fetchAll();
    return res.json({
        message:"Data fetched Successfully !!!",
        status:200,
        success:true,
        data:Result,
        Length:Result.length
    })
  } catch (error) {
    return res.json({
      message: "Internal server error" + error,
      status: 500,
      success: false,
    });
  }
};

const UpdateData = async (req,res) =>{                               //Condition check for Update
  const {id} = req.params;
  const { title, price, categorie, description, rating } = req.body;
  if(!id){
    return res.json({
      success:false,
      status:403,
      message:"Bad request,login again"
    })
  }

  const result = await ModuleIndex.Products.findByIdAndUpdate(_id,{             //Id Updation
    title, price, categorie, description, rating
  })

  return res.json({
    success:true,
    status:200,
    message:"Data updated successfully!!!",
    data:result
  })

}

const DeleteData = async (req,res) =>{             //Data Invalid For Deletion
  const {id} = req.params;
   if(!id){
    return res.json({
      success:false,
      status:403,
      message:"Bad request,login again"
    })
  }

  const result = await ModuleIndex.Products.findByIdAndDelete(id);                 //Finding And Deleting Data
  return res.json({
    success:true,
    status:200,
    message:"Product Deleted successfully!!!",
    data:result
  })
}

const ProductCTRL = {
  CreateProduct,
  GetData,
  UpdateData,
  DeleteData
};

export default ProductCTRL;
