using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SPAProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeneratedController : ControllerBase
    {
        // GET: api/<GeneratedController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<GeneratedController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<GeneratedController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<GeneratedController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<GeneratedController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
