using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using RentIT.Models;

namespace RentIT.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class UserController : Controller
    {
        [HttpGet]
        public IActionResult GetUserDetails([FromQuery] int id)
        {
            using (var db = new rentalappContext())
            {
                var user = db.Users
                    .Where(u => u.UserId == id)
                    .FirstOrDefault();

                if (user == null)
                {
                    return NotFound();
                }

                return Ok(user);
            }
        }
        [HttpGet]
        public List<User> GetUserAllDetails()
        {
            List<User> tlist = new List<User>();
            using (var db = new rentalappContext())
            {
                tlist = db.Users.ToList();
            }
            return tlist;
        }
    }
}
