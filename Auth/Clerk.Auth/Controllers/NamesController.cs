using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Clerk.Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NamesController : ControllerBase
    {
        [HttpGet("test")]
        public IActionResult GetNames()
        {
            return Ok("test");
        }

        [Authorize]
        [HttpGet("test2")]
        public IActionResult GetNames2()
        {
            return Ok("test2");
        }
    }
}
