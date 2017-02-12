using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using System.Threading.Tasks;

namespace MvcApplication2.Controllers
{
    [RoutePrefix("api/products")]
    public class ProductsController : ApiController
    {
        Models.NorthwindEntities entity = new Models.NorthwindEntities();

        [HttpGet]
        [Route("categories")]
        public async Task<List<Models.Categories>> Get()
        {
            return await entity.Categories.ToListAsync<Models.Categories>();
        }

        [HttpGet]
        [Route("categories/{id}")]
        public async Task<Models.Categories> GetByID(int id)
        {
            return await entity.Categories.Include("Products").FirstAsync(x => x.CategoryID == id);
        }
    }
}
