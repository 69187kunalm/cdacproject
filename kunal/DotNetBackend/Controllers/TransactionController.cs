using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using RentalApp.Models;

namespace RentalApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class TransactionController : Controller
    {
        [HttpGet]
        public List<Transaction>  GetTransactionDetails() 
        {
            List<Transaction> tlist = new List<Transaction>();
            using (var db = new rentalappContext())
            {
                tlist = db.Transactions.ToList();
            }
            return tlist;
        }


      
    }
}
