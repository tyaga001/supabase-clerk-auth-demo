using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Supabase.Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public class Employee
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Department { get; set; }
        }

        [Authorize]
        [HttpGet("names")]
        public IActionResult GetEmployee()
        {
            var emp = new Employee
            {
                Id = 101,
                Name = "John Doe",
                Department = "IT"
            };

            return Ok(emp);
        }
    }
}
